import ListaProductos from "../components/ListaProductos";

const Home = ({ isLoggedIn, carrito, setCarrito, productos }) => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Top products</h1>
      <ListaProductos
        isLoggedIn={isLoggedIn}
        carrito={carrito}
        setCarrito={setCarrito}
        productos={productos}
      />
    </div>
  );
};

export default Home;
