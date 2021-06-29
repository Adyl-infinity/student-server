const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const studentsRoutes = require("./routes/students");
const userRoutes = require("./routes/user");

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
// cors разрешает доступ к серверу фронтэнда с другого домена в нашем случае с другого порта

mongoose.connect(
  "mongodb+srv://adyldev:rangerover16@studentdata.6eu8u.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    console.log("Successfully connected");
  }
);

server.use("/api/students", studentsRoutes);
server.use("/api", userRoutes);

server.listen(8000, () => {
  console.log(`server is running, port: 8000`);
});
