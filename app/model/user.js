const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: false },
  id: { type: String, required: false },
  password: { type: String, required: false },
});
var UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
