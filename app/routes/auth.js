const express = require("express");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const router = express.Router();
const passportnaver = require("../config/naverlogin");
const passportkakao = require("../config/kakaologin");
const User = require("../model/user");

passport.serializeUser((user, done) => {
  console.log("serialize user", user);
  done(null, user);
});
passport.deserializeUser((req, user, done) => {
  console.log("deserialeze");
  req.session.islogined = true;
  req.session.username = user.name;
  req.session.userid = user.id;
  done(null, user);
});
router.get("/login/kakao", passport.authenticate("kakao"));
router.get(
  "/login/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/" }),
  function (req, res) {
    console.log("successlogin");
    res.render("users");
  }
);
router.get("/login/naver", passportnaver.authenticate("naver"));
router.get(
  "/login/naver/callback",
  passportnaver.authenticate("naver", { failureRedirect: "/auth/login" }),
  (req, res) => {
    console.log("callback naver");
    res.render("users");
  }
);
router.get("/logout", (req, res) => {
  console.log("logoutsession", req.session.islogined);
  if (req.session.islogined) {
    console.log("LOGOUT");
    req.logout();
    req.session.destroy((err) => {
      //세션제거
      if (err) throw err;
      res.redirect("/");
    });
  } else {
    //로그아웃 실패
    res.status(404).send("로그인 해주세요");
  }
});

module.exports = router;
