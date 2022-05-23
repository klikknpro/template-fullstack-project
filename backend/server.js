require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

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
  console.log(`Template is listening on port ${port}. Please run: "brew services start mongodb-community"`);
});
