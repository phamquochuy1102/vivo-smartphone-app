import { actionTypes } from "../constants";
import { actionCreator } from "./actionCreator";

export const addToCart = (product) => (dispatch) => {
  dispatch(actionCreator(actionTypes.ADD_TO_CART, product));
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch(actionCreator(actionTypes.REMOVE_FROM_CART, id));
};
