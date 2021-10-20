const User = require("../models/user");

exports.GetUser = (req, res) => {
  const email = req.userData.email;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.activo) {
        res.status(200).json(user);
      } else {
        res.status(500).json(user);
      }
    } else {
      const newUser = new User({
        email: req.userData.email,
        nombre: req.userData.name,
        activo: false,
        rol: "Operario",
      });

      newUser.save().then((user) => {
        res.status(200).json(user);
      });
    }
  });
};

exports.ValidarAdmin = (req, res) => {
  const email = req.userData.email;
  User.findOne({ email: email }).then((user) => {
    if (user.rol === "Admin") {
      res.status(200).json(true);
    } else {
      res.status(401).json(false);
    }
  });
};
