const Producto = require("../models/producto");

exports.getProducts = (req, res) => {
  Producto.find()
    .populate("categoria")
    .then((productoResult) => {
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

  productoAdd
    .save()
    .then((createdProduct) => {
      Producto.populate(createdProduct, "categoria").then(
        (populatedProduct) => {
          console.log(createdProduct);
          res.status(201).json({
            mensaje: "Creado satisfactoriamente",
            producto: populatedProduct,
          });
        }
      );
    })
    .catch((error) => {
      res.status(500).json({ err: error });
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

exports.getProductIdLazyLoading = (req, res) => {
  Producto.findById(req.params.id)
    .populate("categoria")
    .then((productoResult) => {
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

exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  Producto.deleteOne({ _id: id }).then((productoResult) => {
    res.status(200).json("El producto se eliminó satisfactoriamente.");
  });
};

exports.editProduct = (req, res) => {
  const id = req.params.id;

  const productoUpd = new Producto({
    _id: id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
  });
  console.log(productoUpd);

  Producto.findByIdAndUpdate(id, productoUpd).then((productoResult) => {
    res.status(200).json("El producto se actualizó satisfactoriamente");
  });
};

exports.findProduct = (req, res) => {
  const name = req.params.name;
  Producto.find({ title: { $regex: ".*" + name + ".*" } }).then((products) => {
    res.status(200).json(products);
  });
};
