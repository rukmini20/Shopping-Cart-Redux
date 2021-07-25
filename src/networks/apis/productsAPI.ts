import api from "./api";
import { products } from "../urls";

export const getproductsAPI = async (values: any) => {
  try {
    return await api
      .get(`${products}/${values}`)
      .then((response) => {
        return { status: response.status, body: response.data };
      })
      .catch((err) => {
        return { status: err.response.status, body: err.response.data };
      });
  } catch (err) {
    return { status: 500, body: "Failed to connect" };
  }
};
