const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  place: String,
  condition: String
});

module.exports = mongoose.model("Patient", patientSchema);
