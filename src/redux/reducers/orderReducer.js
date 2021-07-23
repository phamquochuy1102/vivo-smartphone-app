import { actionTypes } from "../constants";

const initialState = {
  loading: false,
  success: false,
  error: null,
  order: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case actionTypes.ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
