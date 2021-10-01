import React from "react";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { Link } from "react-router-dom";

const HeaderButtons = ({ isLoggedIn, setLogin, cantCarrito }) => {
  const login = () => {
    setLogin(true);
  };

  const logout = () => {
    setLogin(false);
  };

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Link to="/CrearProducto">
          <Button variant="primary" className="me-3">
            Crear producto 
          </Button>
        </Link>

        <Link to="/Carrito">
          <Button variant="primary" className="me-3">
            Carrito <Badge bg="secondary">{cantCarrito}</Badge>
          </Button>
        </Link>

        <Button variant="outline-light" onClick={logout}>
          Logout
        </Button>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <Button variant="light" onClick={login}>
          Login
        </Button>
      </div>
    );
  }
};

export default HeaderButtons;
