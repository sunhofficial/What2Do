
var express = require("express");
var bodyParser = require("body-parser");
var expressSession = require("express-session");

var database = require("../app");
var UserModel = require("../model/user");

var app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

var router = express.Router();

// 로그인 라우터 함수 - 데이터베이스의 정보와 비교
router.post("/", urlencodedParser, function (req, res) {
  console.log("/process/login 호출됨.");

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  if (database) {
    authUser(database, paramId, paramPassword, function (err, docs) {
      if (err) {
        throw err;
      }

      if (docs) {
        console.dir(docs);
        var username = docs[0].name;
        res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
        res.wirte("<h1>로그인 성공</h1>");
        res.write("<div><p>사용자 아이디 : " + paramId + "</p></div>");
        res.write("<div><p>사용자 이름 : " + paramPassword + "</p></div>");
        res.write("<br><br><a href='/public/login.html'>다시 로그인하기</a>");
        res.end();
      } else {
        res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
        res.write("<h1>로그인 실패</h1>");
        res.write("<div><p>아이디와 비밀번호를 다시 확인하십시오.</p></div>");
        res.write("<br><br><a href='/public/login.html'>다시 로그인하기</a>");
        res.end();
      }
    });
  } else {
    res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
    res.wirte("<h2>데이터베이스 연결 실패</h2>");
    res.write("<div><p>데이터베이스에 연결하지 못했습니다.</p></div>");
    res.end();
  }
});

// 사용자를 인증하는 함수
var authUser = function (database, id, password, callback) {
  console.log("authUser 호출됨 :" + id + ", " + password);

  // 아이디와 비밀번호를 사용해 검색
  UserModel.find({ id: id, password: password }, function (err, results) {
    if (err) {
      callback(err, null);
      return;
    }

    console.log("아이디 [%s], 비밀번호 [%s]로 사용자 검색 결과", id, password);
    console.dir(results);

    if (results.length > 0) {
      console.log("일치하는 사용자 찾음.", id, password);
      callback(null, results);
    } else {
      console.log("일치하는 사용자 찾지 못함.");
      callback(null, null);
    }
  });
};
module.exports = router;
