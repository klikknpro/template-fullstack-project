const jwt = require("jsonwebtoken");

const auth =
  ({ block }) =>
  (req, res, next) => {
    console.log("authenticating...");
    // const userid = req.get("authorization");
    const token = req.headers.authorization;
    if (!token && block) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err && block) res.sendStatus(401);
      res.locals.user = payload;
    });

    next();
  };

module.exports = auth;

/*
const jwt = require('jsonwebtoken')

const auth = ({block}) => (req, res, next) => {
        const token = req.headers.authorization;
        if (!token && block) return res.sendStatus(401);

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                if (block) return res.sendStatus(401);
            } else {
                res.locals.userId = user.userId;
            };
            next();
        });
    };

module.exports = auth;
*/
