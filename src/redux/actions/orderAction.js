import axios from "axios";
import { actionTypes } from "../constants";
import { actionCreator } from "./actionCreator";

// export const createOrder = (order) => async (dispatch, getState) => {
//   dispatch(actionCreator(actionTypes.ORDER_CREATE_REQUEST, order));
//   try {
//     const {
//       userReducer: { userInfo },
//     } = getState();
//     const { data } = await axios.post(
//       "http://localhost:5000/api/order",
//       order,
//       {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       }
//     );
//     dispatch(actionCreator(actionTypes.ORDER_CREATE_SUCCESS, data.order));
//     dispatch(actionCreator(actionTypes.EMPTY_CART));
//     localStorage.removeItem("cartItem");
//   } catch (error) {
//     dispatch(
//       actionCreator(
//         actionTypes.ORDER_CREATE_FAIL,
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       )
//     );
//   }
// };
