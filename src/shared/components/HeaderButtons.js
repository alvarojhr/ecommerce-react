import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import api from "../../api";
import { useHistory } from "react-router-dom";

const HeaderButtons = ({ isLoggedIn, setLogin, cantCarrito, setIsAdmin }) => {
  const history = useHistory();

  const login = (res) => {
    localStorage.setItem("token", res.tokenId);
    api.user.getUser().then((res) => {
      setLogin(res.activo);
      if (res.activo) {
        setIsAdmin(res.rol === "Admin");
      } else {
        localStorage.removeItem("token");
      }
    });
  };

  const logout = () => {
    setLogin(false);
    localStorage.removeItem("token");
    history.push("/");
  };

  const loginError = (err) => {
    console.log(err);
  };

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Link to="/Gestion">
          <Button variant="primary" className="me-3">
            Gestión
          </Button>
        </Link>
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
        <GoogleLogin
          clientId="546633833310-dvb26llra8i3v63hjlrf9nhdbrshrmjo.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={login}
          onFailure={loginError}
          cookiePolicy={"single_host_origin"}
        />
        ,
        {/* <Button variant="light" onClick={login}>
          Login
        </Button> */}
      </div>
    );
  }
};

export default HeaderButtons;
