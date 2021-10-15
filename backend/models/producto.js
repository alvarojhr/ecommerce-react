const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const producto = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  url: { type: String, required: true },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
  disponible: { type: Boolean, required: true },
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);
