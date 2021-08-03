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
        ...state,
      };

    default:
      return state;
  }
};
