import { actionTypes } from "../constants";
import { actionCreator } from "./actionCreator";

// export const fetchProducts = () => dispatch => {
//   dispatch(actionCreator,)
// }

export const filterProducts = (type) => (dispatch) => {
  dispatch(actionCreator(actionTypes.FILTER_PRODUCTS, type));
};
