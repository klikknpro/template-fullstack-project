const User = require("../model/user");

const allDashboards = async (req, res) => {
  // needs auth mw. with block
  // find user with userId res.locals.userId
  // return user dashboards

  const user = User.findById(res.locals.userId);
  res.json({ user }); // = {user: user}
  // vagy inkabb user.dashboards megy vissza
};

exports.allDashboards = allDashboards;
