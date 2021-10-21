import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import HeaderButtons from "./components/HeaderButtons";

const Header = ({ isLoggedIn, login, cantCarrito, setIsAdmin }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Mi Tienda</Navbar.Brand>
        <Nav className="justify-content-end">
          <HeaderButtons
            isLoggedIn={isLoggedIn}
            setLogin={login}
            cantCarrito={cantCarrito}
            setIsAdmin={setIsAdmin}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
