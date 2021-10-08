const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema({
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
});

module.exports = mongoose.model("Categoria", categoriaSchema);
