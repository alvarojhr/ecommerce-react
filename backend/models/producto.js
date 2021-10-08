const mongoose = require("mongoose");

const producto = mongoose.Schema({
  title: { type: String, required: true },
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

module.exports = mongoose.model("Producto", producto);
