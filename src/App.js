import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";

import Home from "./home/pages/Home";
import Carrito from "./carrito/pages/Carrito";
import Header from "./shared/Header";
import CrearProducto from "./productos/pages/CrearProducto";
import Gestion from "./productos/pages/Gestion";
import api from "./api";
import { useEffect } from "react";
import EditarProducto from "./productos/pages/EditarProducto";
import PrivateRoute from "./shared/components/PrivateRoute";
import { useJwt } from "react-jwt";
import PrivateRouteAdmin from "./shared/components/PrivateRouteAdmin";

function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      const validRol = await api.user.validarAdmin();
      setIsAdmin(validRol);
    };

    if (token === null) {
      setLogged(false);
    } else {
      fetchData();
      setLogged(true);
    }
  }, []);

  return (
    <Router>
      <Header
        isLoggedIn={logged}
        login={setLogged}
        setIsAdmin={setIsAdmin}
        cantCarrito={carrito.reduce(
          (total, producto) => total + producto.cantidad,
          0
        )}
      />
      <Switch>
        <Route path="/" exact>
          <Home
            isLoggedIn={logged}
            carrito={carrito}
            setCarrito={setCarrito}
            productos={productos}
          />
        </Route>
        <PrivateRoute path="/Carrito" exact>
          <Carrito carrito={carrito} setCarrito={setCarrito} />
        </PrivateRoute>
        <PrivateRoute path="/CrearProducto" exact>
          <CrearProducto productos={productos} setProductos={setProductos} />
        </PrivateRoute>
        <PrivateRouteAdmin path="/Gestion" isAdmin={isAdmin} exact>
          <Gestion productos={productos} setProductos={setProductos} />
        </PrivateRouteAdmin>
        <PrivateRoute path="/Gestion/Edit/:productId" exact>
          <EditarProducto productos={productos} setProductos={setProductos} />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
