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

const products = [
  {
    id: 1,
    title: "Zapato Nike",
    description: "Este es el mejor zapato del planeta",
    price: 100,
    url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    categoria: "Calzado",
    disponible: true,
  },
  {
    id: 2,
    title: "Gafas Rayban",
    description: "Gafas para cuidar tus ojos",
    price: 50,
    url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    categoria: "Accesorios",
    disponible: true,
  },
  {
    id: 3,
    title: "Apple Watch",
    description: "Smartwatch para estar siempre conectado",
    price: 200,
    url: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    categoria: "Wearables",
    disponible: true,
  },
];

function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState(products);

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
        <Route path="/CrearProducto">
          <CrearProducto productos={productos} setProductos={setProductos} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
