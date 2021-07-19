import axios from "axios";
import { actionTypes } from "../constants";
import { actionCreator } from "./actionCreator";

export const fetchProducts = () => async (dispatch) => {
  const products = await axios.get(
    "https://vivo-smartphone-app-backend.herokuapp.com/api/products"
  );
  const productsData = products.data;
  dispatch(actionCreator(actionTypes.FETCH_PRODUCTS, productsData));
  console.log(productsData);
};

export const filterProducts = (type) => (dispatch) => {
  dispatch(actionCreator(actionTypes.FILTER_PRODUCTS, type));
};
