const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  /**
   * req.user가 있는 경우는 소셜 로그인에 성공한 경우
   * passport에 의해 user가 주입됨 (deserialize 확인)
   */
  console.log(req);
  if (req.session.islogined) {
    res.render("users");
  } else {
    res.render("login");
  }
});

router.get("/map", (req, res) => {
  res.render("map");
});

router.get("/alchoal", (req, res) => {
  res.render("alchoal");
});
router.get("/foodtravel", (req, res) => {
  res.render("foodtravel");
});
router.get("/healing", (req, res) => {
  res.render("healing");
});
router.get("/shopping", (req, res) => {
  res.render("shopping");
});
router.get("/playing", (req, res) => {
  res.render("playing");
});

router.get("/culture", (req, res) => {
  res.render("culture");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
