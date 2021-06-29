const Student = require("../models/students");

const getStudents = async (req, res) => {
  await Student.find({}, (error, students) => {
    if (error) {
      return res.status(400).json({ error });
    }
    return res.json(students);
  });
};

const addStudent = (req, res) => {
  const newStudent = new Student(req.body);
  newStudent.save((error, data) => {
    if (error) {
      return res.status(400).json({ error });
    }
    res.json(data);
  });
};





const removeStudent = async (req, res) => {
  const id = req.params.id;
  Student.deleteOne({ _id: id }, (err, student) => {
    console.log(student);
    if (err) throw err;
    return res.json({ status: "success" });
  });
};









const updateStudent = (req, res) => {
  const { id } = req.params;
  Student.findById({ _id: id }).exec((err, student) => {
    if (err) {
      res.status(400).json({ error: "NOT FOUND" });
    }
    const updatedStudent = Object.assign(student, req.body);
    updatedStudent.save((err, updatedStudent) => {
      if (err) {
        res.status(400).json({ error: "Ошибка обновления студента" });
      }
      return res.json(updatedStudent);
    });
  });
};

module.exports = { getStudents, removeStudent, updateStudent, addStudent };
