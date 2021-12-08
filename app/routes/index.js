const express = require("express");
const router = express.Router();
const key = require("../../kakaoapkey");
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
  res.render("map"), { appkey: appkey };
});

router.get("/alchoal", (req, res) => {
  res.render("alchoal", { appkey: appkey });
});
router.get("/foodtravel", (req, res) => {
  res.render("foodtravel", { appkey: appkey });
});
router.get("/healing", (req, res) => {
  res.render("healing", { appkey: appkey });
});
router.get("/shopping", (req, res) => {
  res.render("shopping", { appkey: appkey });
});
router.get("/playing", (req, res) => {
  res.render("playing", { appkey: appkey });
});

router.get("/culture", (req, res) => {
  res.render("culture", { appkey: appkey });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
