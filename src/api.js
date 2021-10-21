const callApi = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + url,
    options
  );
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products");
    },
    create(producto) {
      return callApi("/products", {
        method: "POST",
        body: JSON.stringify(producto),
      });
    },
    delete(id) {
      return callApi(`/products/${id}`, {
        method: "DELETE",
      });
    },
    edit(producto) {
      return callApi(`/products/${producto._id}`, {
        method: "PUT",
        body: JSON.stringify(producto),
      });
    },
    getProduct(id) {
      return callApi(`/products/${id}`);
    },
    find(name) {
      return callApi(`/products/${name}`);
    },
  },
  categorias: {
    list() {
      return callApi("/categoria");
    },
  },
  user: {
    getUser() {
      return callApi("/user");
    },
    validarAdmin() {
      return callApi("/user/validarAdmin");
    },
  },
};

export default api;
