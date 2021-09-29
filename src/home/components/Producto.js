import Card from "react-bootstrap/Card";
import CardFooter from "./CardFooter";

const Producto = ({ producto, isLoggedIn, productos, carrito, setCarrito }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.url} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <CardFooter
          id={producto.id}
          precio={producto.price}
          categoria={producto.categoria}
          isLoggedIn={isLoggedIn}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </Card.Body>
    </Card>
  );
};

export default Producto;
