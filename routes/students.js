const express = require("express");
const router = express.Router();
const {
  addStudent,
  removeStudent,
  updateStudent,
  getStudents,
} = require("../controllers/students");

router.get("/", getStudents);

router.post("/", addStudent);

router.delete("/:id", removeStudent);

router.patch("/:id", updateStudent);

module.exports = router;
