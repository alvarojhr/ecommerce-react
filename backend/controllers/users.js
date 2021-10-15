const User = require("../models/user");

exports.GetUser = (req, res) => {
  const email = req.params.email;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.activo) {
        res.status(200).json("Usuario activo");
      } else {
        res.status(500).json("Usuario inactivo");
      }
    } else {
      const newUser = new User({
        email: req.userData.email,
        nombre: req.userData.name,
        activo: false,
      });

      newUser.save().then((user) => {
        res.status(200).json("Usuario creado");
      });
    }
  });
};
