const session = require("express-session");

module.exports = (app) => {
  app.use(
    session({
      secret: "secrett",
      cookie: { maxAge: 60 * 60 * 1000 },
      resave: true,
      saveUninitialized: false,
    })
  );
};
