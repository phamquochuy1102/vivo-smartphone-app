import { actionTypes } from "../constants";
import { actionCreator } from "./actionCreator";

export const addToCart = (product) => (dispatch) => {
  dispatch(actionCreator(actionTypes.ADD_TO_CART, product));
  alert(" ☑ Thêm vào giỏ hàng thành công!");
};

export const reomoveFromCart = (id) => (dispatch) => {
  dispatch(actionCreator(actionTypes.REMOVE_FROM_CART, id));
};
