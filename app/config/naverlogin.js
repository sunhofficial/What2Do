const passport = require("passport");
const NaverStrategy = require("passport-naver").Strategy;
const User = require("../model/user");
// passport.serializeUser((user, done) => {
//   console.log("serialize user", user);
//   done(null, user);
// });
// passport.deserializeUser((req, user, done) => {
//   console.log("deserialeze", req, user, this.session);
//   req.session.islogined = true;
//   req.session.username = user.name;
//   req.session.userid = user.id;
//   done(null, user);
// });
passport.use(
  new NaverStrategy(
    {
      clientID: "HSh2Brz7azm9K_3UPIN3",
      clientSecret: "ayl3SXnP_T",
      callbackURL: "/auth/login/naver/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      const _profile = profile._json;
      console.log(_profile);
      User.findOne({ id: _profile.id }, (err, user) => {
        if (err) res.status(400).send("로그인 에러");
        else if (user) {
          return done(null, user);
        } else {
          const newuser = new User({
            id: _profile.id,
            name: profile.displayName,
          });
          newuser.save((user) => {
            return done(null, user);
          });
        }
      });
    }
  )
);
module.exports = passport;
