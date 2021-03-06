const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
// parse requests of content-type: application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// // database
// const db = require("./app/models");
// const Role = db.role;

// db.sequelize.sync();

app.use(cors());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to maxDigi application." });
});

require("./app/routes/user.routes.js")(app);
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
