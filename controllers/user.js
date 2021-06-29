const User = require("../models/user");
// регистрация нового пользователя
const register = (req, res) => {
  const { username, password, role } = req.body;
  User.findOne({ username }, (error, user) => {
    if (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: { msgBody: "Возникла ошибка", msgError: true } });
    }
    if (user) {
      return res.status(400).json({
        message: { msgBody: "Пользователь уже существует", msgError: true },
      });
    }
    const newUser = new User({ username, password, role });
    newUser.save((error) => {
      if (error) {
        console.log(error);
        return res

          .status(500)
          .json({ message: { msgBody: "Возникла ошибка", msgError: true } });
      }
      return res.status(201).json({
        message: { msgBody: "Аккаунт успешно создан", msgError: false },
      });
    });
  });
};

module.exports = { register };
