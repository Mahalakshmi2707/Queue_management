const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String   // patient, doctor, admin
});

module.exports = mongoose.model("User", userSchema);
