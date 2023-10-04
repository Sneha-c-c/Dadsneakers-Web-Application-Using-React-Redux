import axios from 'axios';

const URL = 'https://dummyjson.com/products';

const getAllProducts = () => {
  return axios.get(URL);
};

const getProductById = (id) => {
  return axios.get(`${URL}/${id}`);
};

const addProduct = (data) => {
  return axios.post(URL, data);
};

const deleteProduct = (id) => {
  return axios.delete(`${URL}/${id}`);
};

const updateProduct = (id, data) => {
  return axios.put(`${URL}/${id}`, data);
};

export { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct };




