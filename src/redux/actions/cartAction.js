import { actionTypes } from "../constants";
import { actionCreator } from "./actionCreator";

export const addToCart = (product) => (dispatch) => {
  dispatch(actionCreator(actionTypes.ADD_TO_CART, product));
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch(actionCreator(actionTypes.REMOVE_FROM_CART, id));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch(actionCreator(actionTypes.CART_SAVE_SHIPPING_ADDRESS, data));
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePayAndDeliveryMethod = (data) => (dispatch) => {
  dispatch(actionCreator(actionTypes.CART_SAVE_PAYMENT_DELIVERY_METHOD, data));
  localStorage.setItem("payment", JSON.stringify(data));
};

export const order = () => (dispatch) => {
  dispatch(actionCreator(actionTypes.EMPTY_CART));
  localStorage.removeItem("cartItem");
};
