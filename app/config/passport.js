const KakaoStrategy = require("passport-kakao").Strategy;
const NaverStrategy = require("passport-naver").Strategy;
module.exports = (app) => (passport) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    console.log("serialize user", user);
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    console.log("deserialize user", user);
    done(null, user); // 여기서 전달되는 user 가 req.user
  });
  passport.use(
    new KakaoStrategy(
      {
        clientID: "5b5b58098ed54b269acbbd8758bd1a73",
        clientSecret: "g98pZbUKayCDjS2skZTcXei0HmM5qtAf",
        callbackURL: "/auth/login/kakao/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile", profile);
        return cb(null, profile);
      }
    )
  );
  passport.use(
    new NaverStrategy(
      {
        clientID: "HSh2Brz7azm9K_3UPIN3",
        clientSecret: "ayl3SXnP_T",
        callbackURL: "/auth/login/naver/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile", profile);
        return cb(null, profile);
      }
    )
  );
};
