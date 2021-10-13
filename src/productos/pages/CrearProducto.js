import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import { useHistory } from "react-router-dom";

const CrearProducto = ({ productos, setProductos }) => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    url: "",
    categoria: "",
    disponible: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.categorias.list();
      setCategorias(response);
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.products.create(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setProductos([...productos, newProduct]);
      //history.push("/");
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-5 mb-5">Crear producto</h1>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  style={{ height: "50px" }}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>URL Imagen</Form.Label>
                <Form.Control type="text" name="url" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="categoria"
                  onChange={handleChange}
                >
                  <option>Seleccione una categoria</option>
                  {categorias.map((categoria) => (
                    <option key={categoria._id} value={categoria._id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Disponible"
                  name="disponible"
                  value="true"
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="button" variant="outline-secondary">
                Cancelar
              </Button>
              <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                className="float-end"
              >
                Guardar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CrearProducto;
