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
    const productoAgregar = productos.find((p) => p.id === e.target.id);
    setCarrito([...carrito, productoAgregar]);
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
