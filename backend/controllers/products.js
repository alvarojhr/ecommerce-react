const Producto = require("../models/producto");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.addProduct = (req, res) => {
  const productoAdd = new Producto({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
  });

  productoAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Creado satisfactoriamente");
  });
};

exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

exports.getProductoDisponible = (req, res) => {
  Producto.find({ disponible: true }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};
