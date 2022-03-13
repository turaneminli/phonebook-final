const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const mainRouter = require("./routes/mainRouter");

const app = express();
app.use(cors());
// app.options("*", cors());
app.use(
  cors({
    origin: "*",
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.json());

// Routers
app.use(mainRouter);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(80);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
