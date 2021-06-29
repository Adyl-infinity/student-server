const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    /*id:  {required: true, type: Number},*/
    name: { required: true, type: String },
    status: { required: true, type: String },
    comments: { required: true, type: String },
    phone: { required: true, type: String },
    contract: { required: true, type: Number },
    prepay: { required: true, type: Number },
    laptop: { required: true, type: String },
    group: { required: true, type: String },
    gender: { required: true, type: String },
  },
  { timestamps: true }
);

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
