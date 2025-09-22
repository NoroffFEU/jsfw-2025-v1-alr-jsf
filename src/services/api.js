import axios from "axios";

const API_BASE = "https://v2.api.noroff.dev/online-shop";

export const fetchProducts = async () => {
  const response = await axios.get(API_BASE);
  return response.data.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE}/${id}`);
  return response.data.data;
};
