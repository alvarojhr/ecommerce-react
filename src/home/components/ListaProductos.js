import { Container, Row, Col } from "react-bootstrap";
import Producto from "./Producto";

const ListaProductos = () => {
  const productos = [
    {
      title: "Zapato Nike",
      description: "Este es el mejor zapato del planeta",
      price: 100,
      url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
    {
      title: "Gafas Rayban",
      description: "Gafas para cuidar tus ojos",
      price: 50,
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
    {
      title: "Apple Watch",
      description: "Smartwatch para estar siempre conectado",
      price: 200,
      url: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
  ];

  return (
    <Container>
      <Row>
        {productos.map((producto) => (
          <Col xs={4}>
            <Producto producto={producto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaProductos;
