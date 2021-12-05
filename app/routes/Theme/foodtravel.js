var express = require("express");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var router = express.Router();
var shopname1;
var shopname2;
var shopname3;

router.get("/", (req, res) => {
  res.render("foodtravel");
});

router.post("/", urlencodedParser, (req, res) => {
  console.log("post 성공이야~!");
  var user_place = req.body.user_place || req.query.user_place;
  console.log("foodtravel.js 접근");
  console.log(user_place);

  // python 연결
  const spawn = require("child_process").spawn;
  const currentDirectory = __dirname;
  const python = spawn("python", [currentDirectory + "./foodtravel.py", user_place]);

  console.log("python 연결");

  python.stdout.on("data", function (data) {
    var result = data.toString("utf-8");
    array = result.split('/');
    shopname1 = array[0];
    shopname2 = array[1];
    shopname3 = array[2];
  });

  python.stderr.on("data", function (data) {
    console.log(data.toString("utf-8"));
  });
});

module.exports = router;
