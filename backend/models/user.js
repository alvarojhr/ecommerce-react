const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  nombre: { type: String, required: true },
  activo: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", userSchema);
