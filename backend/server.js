require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");

const corsOptions = {
  origin: process.env.APP_URL, // a FE localhost kell ide
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); // body-ban erkezo json-t parse-olni tudja

app.use([logger, auth]); // middlewares

app.get("/api/logic1", (req, res) => {
  console.log("logic1");
  res.send("hello template 1");
});

app.get("/api/logic2", (req, res) => {
  console.log("logic2");
  res.send("hello template 2");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Template is listening on port ${port}. Run: "brew services start mongodb-community"`);
});
