const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const User = require("../model/user");
passport.use(
  new KakaoStrategy(
    {
      clientID: "5b5b58098ed54b269acbbd8758bd1a73",
      clientSecret: "g98pZbUKayCDjS2skZTcXei0HmM5qtAf",
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
