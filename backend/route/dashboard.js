const router = require("express").Router();
const { allDashboards } = require("../controller/dashboard");

/* these are REST endpoints */
router.get("/api/dashboards", auth({ block: true }), allDashboards); // display the user's all dashboards

router.get("/api/dashboards/:id", controller); // display one dashboard

router.get("/api/dashboards/:id/todos", controller);

router.get("/api/dashboards/:id/todos/:id", controller);

router.post("/api/dashboards", controller); // create dashboard and send dashboard :id

router.post("/api/dashboards/:id/todos"); // create a todo and send todo :id back

router.patch("/api/dashboards/:id", controller); // update and send updated dashboard :id back

router.patch("/api/dashboards/:id/todos/:id", controller); // update and send updated todo :id back

router.delete("/api/dashboards/:id", controller); // isDeleted: true ;)

router.delete("/api/dashboards/:id/todos/:id", controller); // isDeleted: true ;)

module.exports = router;

/*
dashboardS
todoS
*/
