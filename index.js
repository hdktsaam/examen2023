const express = require("express");
const user = require("./routes/routeUser");
const les = require("./routes/routeLes");
const rating = require("./routes/routeRating");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.use("/api/user", user);
app.use("/api/les", les);
app.use("/api/rating", rating);

app.listen(4000, () => {
  console.log("connected op poort 4000");
});
