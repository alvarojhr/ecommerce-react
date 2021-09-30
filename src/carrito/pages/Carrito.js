import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Carrito = ({ carrito, setCarrito }) => {
  const popProduct = (e) => {
    const productoEliminar = e.target.id;
    const carritoSinProducto = carrito.filter((p) => p.id != productoEliminar);
    setCarrito([...carritoSinProducto]);
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Mi Carrito</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => {
              return (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.total}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={popProduct}
                      id={producto.id}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                <strong>Total</strong>
              </td>
              <td>
                <strong>
                  {carrito.reduce(
                    (total, producto) => total + producto.total,
                    0
                  )}
                </strong>
              </td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
};

export default Carrito;
