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
    const productoAgregar = productos.find((p) => p.id == e.target.id);
    console.log(typeof e.target.id);
    const productoAgregado = carrito.find((p) => p.id === productoAgregar.id);

    if (productoAgregado) {
      //Cuando ya está el producto en el carrito
      productoAgregado.cantidad++;
      productoAgregado.total =
        productoAgregado.precio * productoAgregado.cantidad;
      setCarrito([...carrito]);
    } else {
      //Cuando no se ha agregado el producto al carrito

      const producto = {
        id: productoAgregar.id,
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
        {categoria}
      </Badge>
    );
  }
};

export default CardFooter;
