const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  empName: { type: String, required: true },
  fatherName: { type: String },
  mobileNo: { type: String },
  aadharCard: { type: String, required: true },
  addressLine1: { type: String },
  addressLine2: { type: String },
  city: { type: String },
  state: { type: String },
  salary: { type: String },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
