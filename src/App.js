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

function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);

  return (
    <Router>
      <Header
        isLoggedIn={logged}
        login={setLogged}
        cantCarrito={carrito.length}
      />
      <Switch>
        <Route path="/" exact>
          <Home isLoggedIn={logged} carrito={carrito} setCarrito={setCarrito} />
        </Route>
        <Route path="/Carrito" exact>
          <Carrito />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
