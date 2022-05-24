const auth = (req, res, next) => {
  console.log("authenticating...");
  const userid = 1;
  res.locals.userid = userid;
  next();
};

module.exports = auth;
