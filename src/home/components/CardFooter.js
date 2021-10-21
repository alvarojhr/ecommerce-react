import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const CardFooter = ({
  id,
  precio,
  categoria,
  isLoggedIn,
  productos,
  carrito,
  setCarrito,
}) => {
  const AddProduct = (e) => {
    console.log(e.target);
    const productoAgregar = productos.find((p) => p._id == e.target.id);
    console.log(typeof e.target.id);
    const productoAgregado = carrito.find((p) => p._id === productoAgregar._id);

    if (productoAgregado) {
      //Cuando ya está el producto en el carrito
      productoAgregado.cantidad++;
      productoAgregado.total =
        productoAgregado.precio * productoAgregado.cantidad;
      setCarrito([...carrito]);
    } else {
      //Cuando no se ha agregado el producto al carrito
      console.log(productoAgregar);

      const producto = {
        _id: productoAgregar._id,
        nombre: productoAgregar.title,
        cantidad: 1,
        precio: productoAgregar.price,
        total: productoAgregar.price,
      };
      setCarrito([...carrito, producto]);
    }

    console.log(carrito);
  };

  if (isLoggedIn) {
    return (
      <Button id={id} variant="primary" onClick={AddProduct}>
        ${precio}
      </Button>
    );
  } else {
    return (
      <Badge pill bg="secondary">
        {categoria.nombre}
      </Badge>
    );
  }
};

export default CardFooter;
