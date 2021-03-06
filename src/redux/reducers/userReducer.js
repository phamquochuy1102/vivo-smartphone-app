import { actionTypes } from "../constants";

const initialState = {
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  userRegister: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER:
      return {
        loading: true,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userRegister: action.payload,
      };
    case actionTypes.USER_REGISTER_FAIL:
      return {
        loading: false,
        errorRegister: action.payload,
      };
    case actionTypes.USER_LOGIN:
      return {
        loading: true,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
