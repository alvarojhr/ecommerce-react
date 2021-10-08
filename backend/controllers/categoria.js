const Categoria = require("../models/Categoria");

exports.CreateCategoria = (request, response) => {
  const categoriaForAdd = new Categoria({
    codigo: request.body.codigo,
    nombre: request.body.nombre,
  });

  categoriaForAdd.save().then((categoriaCreated) => {
    response.status(201).json(categoriaCreated);
  });
};

exports.GetAll = (req, res) => {
  Categoria.find().then((categorias) => {
    res.status(200).json(categorias);
  });
};
