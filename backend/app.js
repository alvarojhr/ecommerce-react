var express = require("express");
var app = express();

const productsRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productsRoutes);

module.exports = app;
