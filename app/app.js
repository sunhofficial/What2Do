const express = require("express");
const http = require("http");
const passport = require("passport");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const app = express();
dotenv.config();

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/")
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));
  /*
  .on('disconnected', function(){
    console.log("연결이 끊어졌습니다. 5초 후 다시 연결합니다.");
    setInterval(connectDB, 5000);
  });
  */

const configureSession = require("./config/session");
configureSession(app);

//vies setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
/**
 * Routing
 */
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/auth", authRouter);

module.exports = app;
