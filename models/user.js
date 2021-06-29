const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// создаем новую схему пользователей при регистрации

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.hash(this.password, 8, (err, hash) => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model("users", userSchema);
module.exports = User;
