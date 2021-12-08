const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const User = require("../model/user");
const dotenv = require("dotenv");
dotenv.config({ path: "process.env" });
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.Clientid,
      clientSecret: process.env.ClientSecret,
      callbackURL: "/auth/login/kakao/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      User.findOne({ id: profile.id }, (err, user) => {
        if (err) return res.status(400).send("카카오 로그인 에러");
        else if (user) {
          id = profile.id;

          return done(null, user);
        } else {
          const new_user = new User({
            id: profile.id,
            name: profile.username,
          });
          new_user.save((user) => {
            return done(null, user);
          });
        }
      });
    }
  )
);
