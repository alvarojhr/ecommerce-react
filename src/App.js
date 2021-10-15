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

function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, []);

  return (
    <Router>
      <Header
        isLoggedIn={logged}
        login={setLogged}
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
        <Route path="/Carrito" exact>
          <Carrito carrito={carrito} setCarrito={setCarrito} />
        </Route>
        <Route path="/CrearProducto" exact>
          <CrearProducto productos={productos} setProductos={setProductos} />
        </Route>
        <Route path="/Gestion" exact>
          <Gestion productos={productos} setProductos={setProductos} />
        </Route>
        <Route path="/Gestion/Edit/:productId" exact>
          <EditarProducto productos={productos} setProductos={setProductos} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
