const CallApi = async () => {
  const response = await fetch("http://localhost:3002/api/products");
  const data = await response.json();
  return data;
};

export default CallApi;
