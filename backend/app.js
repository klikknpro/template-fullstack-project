const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const corsOptions = {
  origin: process.env.APP_URL, // a FE localhost kell ide
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); // body-ban erkezo json-t parse-olni tudja
app.use([logger]); // use this middleware on every request

const dashboardRouter = require("./route/dashboard");
app.use("/api/dashboards", dashboardRouter);

/* tutorial */
app.post("/user", (req, res) => {
  res.sendStatus(200);
});
/* tutorial */

app.use(errorHandler);

module.exports = app;

/*

*/
