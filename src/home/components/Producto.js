import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Producto = ({ producto }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.url} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Button variant="primary">${producto.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default Producto;
