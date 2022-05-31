const router = require("express").Router();
const User = require("../model/user");
const { user } = require("../controller/login");

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

  let response;
  try {
    response = await http.post(link, {
      code: code,
      client_id: configProvider.clientId,
      client_secret: configProvider.clientSecret,
      redirect_uri: configProvider.redirectUri,
      grant_type: "authorization_code",
    });
  } catch (err) {
    return res.status(401).send();
  }

  //
});

/* tutorial */
router.post("/", user);
/* tutorial */

module.exports = router;
