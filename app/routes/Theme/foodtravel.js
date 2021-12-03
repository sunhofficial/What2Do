var express = require("express");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var router = express.Router();

router.get("/", (req, res) => {
  res.render("foodtravel");
});

router.post("/", (req, res) => {
  console.log("post 성공이야~!");
  let place = req.body.place;
  console.log("foodtravel.js 접근");
  console.log(place);

  // python 연결
  const spawn = require("child_process").spawn;
  const python = spawn("python", ["foodtravel.py", place]);

  python.stdout.on("data", function (data) {
    var result = data.toString("utf-8");
    console.log(result);
  });

  python.stderr.on("data", function (data) {
    console.log(data.toString("utf-8"));
  });
});

module.exports = router;
