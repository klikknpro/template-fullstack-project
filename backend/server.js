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

app.use([logger]); // middlewares

app.get("/api/public", (req, res) => {
  console.log("public");
  res.send("hello template public");
});

app.get("/api/private", auth({ block: true }), (req, res) => {
  console.log("private");
  res.send(`hello template private, ${res.locals.userid}`);
});

app.get("/api/prublic", auth({ block: false }), (req, res) => {
  if (!res.locals.userid) return res.send("hello world prublic");
  res.send(`hello template prublic, your id is, ${res.locals.userid}`);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Template is listening on port ${port}. Run: "brew services start mongodb-community"`);
});
