const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { user } = require("../controller/login");
const httpModule = require("../util/http");
const http = httpModule();
const User = require("../model/user");

const config = {
  google: {
    clientId: "",
    clientSecret: "",
    redirectUri: "",
    tokenEndpoint: "",
  },
  // facebook: {
  //   clientId: "",
  //   clientSecret: "",
  //   redirectUri: "",
  //   tokenEndpoint: "",
  // },
  // github: {
  //   clientId: "",
  //   clientSecret: "",
  //   redirectUri: "",
  //   tokenEndpoint: "",
  // },
};

router.post("/api/login", async (req, res) => {
  const payload = req.body;
  if (!payload) return res.status(400).send("Nice try");

  const code = payload.code;
  const provider = payload.provider;
  if (!code || !provider) return res.status(400).send("Nice try");
  if (Object.keys(config).includes("provider")) return res.status(400).send("Nice try");

  const link = configProvider.tokenEndpoint;
  const configProvider = config[provider];

  // our own http module
  const response = await http.post(link, {
    code: code,
    client_id: configProvider.clientId,
    client_secret: configProvider.clientSecret,
    redirect_uri: configProvider.redirectUri,
    grant_type: "authorization_code",
  });

  if (!response) return res.sendStatus(500);
  if (response.status !== 200) return res.status(400).send("Nice try");

  const decoded = jwt.decode(response.data.id_token);
  if (!decoded) return res.status(500).send("Provider error");

  // find user if exists
  const key = "providers" + provider;
  const user = await User.findOneAndUpdate(
    { [key]: decoded.sub },
    {
      providers: {
        [provider]: decoded.sub,
      },
    },
    {
      upsert: true,
    }
  );

  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.status(200).json(token);
});

/* tutorial */
router.post("/", user);
/* tutorial */

module.exports = router;
