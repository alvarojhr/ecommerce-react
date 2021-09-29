import { Container, Row, Col } from "react-bootstrap";
import Producto from "./Producto";

const ListaProductos = ({ isLoggedIn, carrito, setCarrito }) => {
  const productos = [
    {
      id: 1,
      title: "Zapato Nike",
      description: "Este es el mejor zapato del planeta",
      price: 100,
      url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      categoria: "Calzado",
    },
    {
      id: 2,
      title: "Gafas Rayban",
      description: "Gafas para cuidar tus ojos",
      price: 50,
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      categoria: "Accesorios",
    },
    {
      id: 3,
      title: "Apple Watch",
      description: "Smartwatch para estar siempre conectado",
      price: 200,
      url: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
      categoria: "Wearables",
    },
  ];

  return (
    <Container>
      <Row>
        {productos.map((producto) => (
          <Col xs={4}>
            <Producto
              producto={producto}
              isLoggedIn={isLoggedIn}
              productos={productos}
              carrito={carrito}
              setCarrito={setCarrito}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaProductos;
