require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;

const corsOptions = {
  origin: process.env.APP_URL, // a FE localhost kell ide
  optionsSuccessStatus: 200,
};

const myMiddleware = (req, res, next) => {
  console.log("logging...");
  next();
};

const myAuthMiddleware = (req, res, next) => {
  console.log("authenticating...");
  const userid = null;
  req.userid = userid;
  next();
};

const myBusinessLogic = (req, res, next) => {
  if (!req.userid) return res.sendStatus(401);
  console.log("business logging...");
  res.sendStatus(200);
};

app.use(myMiddleware);
app.use(myAuthMiddleware);
app.use(myBusinessLogic);

// app.use(cors(corsOptions));
// app.use(express.json()); // body-ban erkezo json-t parse-olni tudja

// app.get("/", (req, res) => {
//   res.send("hello template");
// });

// mongoose
//   .connect(process.env.CONNECTION_STRING)
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log(error));

/* === *** === *** === */

// mongoose.connection
//   .dropDatabase()
//   .then(() => console.log("database deleted"))
//   .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Template is listening on port ${port}. Run: "brew services start mongodb-community"`);
});
