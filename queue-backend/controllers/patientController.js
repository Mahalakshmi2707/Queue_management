const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
};

exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};
