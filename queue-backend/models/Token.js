const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  patientName: String,
  specialist: String,
  time: String,
  status: {
    type: String,
    default: "Waiting"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Token", tokenSchema);
