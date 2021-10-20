import Form from "react-bootstrap/Form";
import api from "../../api";

const Busqueda = ({ productos, setProductos }) => {
  const find = (event) => {
    const regex = new RegExp(".*" + event.target.value + ".*");
    const productosFilter = productos.filter((product) =>
      product.title.match(regex)
    );
    console.log(productosFilter);
    setProductos(productosFilter);
  };

  return <Form.Control onChange={find} type="text" placeholder="Buscar..." />;
};

export default Busqueda;
