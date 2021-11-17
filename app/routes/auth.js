const express = require("express");
const passport = require("passport");
const router = express.Router();
router.get("/login/kakao", passport.authenticate("kakao"));
router.get(
  "/login/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/auth/login",
    successRedirect: "/",
  })
);
router.get("/login/naver", passport.authenticate("naver"));
router.get(
  "/login/naver/callback",
  passport.authenticate("naver", { failureRedirect: "/auth/login" }),
  (req, res) => {
    console.log("callback naver");
    res.redirect("/");
  }
);
router.get("/logout", (req, res) => {
  req.logout();
  req.session.save((err) => {
    if (err) throw err;
    console.log("logout");
    res.redirect("/");
  });
});
module.exports = router;
