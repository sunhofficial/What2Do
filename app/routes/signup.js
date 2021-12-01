var express = require("express");
var database = require("../app.js");
var UserModel = require("../model/user");

var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var router = express.Router();
router.get("/", (req, res) => {
  res.render("signup");
});
router.post("/", urlencodedParser, function (req, res) {
  console.log("/signup 호출됨.");

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;
  var paramName = req.body.name || req.query.name;

  console.log(
    "요청 파라미터 : " + paramId + ", " + paramPassword + ", " + paramName
  );

  // 데이터베이스 객체가 초기화된 경우, addUser 함수 호출하여 사용자 추가
  if (database) {
    addUser(
      database,
      paramId,
      paramPassword,
      paramName,
      function (err, addedUser) {
        if (err) {
          throw err;
        }

        //결과 객체 확인하여 추가된 데이터 있으면 성공 응답 전송
        //if(result && result.insertedCount > 0){
        if (addedUser) {
          res.render("users");
        } else {
          res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
          res.write("<h2>사용자 추가 실패</h2>");
          res.end();
        }
      }
    );
  } else {
    // 데이터베이스 객체가 초기화되지 않는 경우 실패응답 전송
    res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
    res.write("<h2>데이터베이스 연결 실패</h2>");
    res.end();
  }
});

// 사용자를 추가하는 함수
var addUser = function (database, id, password, name, callback) {
  console.log("addUser 호출됨 : " + id + ", " + password + ", " + name);

  // UserModel의 인스턴스 객체 생성
  var user = new UserModel({ id: id, password: password, name: name });

  // save()로 저장
  user.save(function (err) {
    if (err) {
      callback(err, null);
      return;
    }
    console.log("사용자 데이터 추가함.");
    callback(null, user);
  });
};
module.exports = router;
