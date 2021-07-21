import axios from "axios";
import { actionTypes } from "../constants";
import { actionCreator } from "./actionCreator";

export const login = (email, password) => async (dispatch) => {
  dispatch(actionCreator(actionTypes.USER_LOGIN, { email, password }));
  try {
    const { data } = await axios.post(
      "https://vivo-smartphone-app-backend.herokuapp.com/api/users/login",
      {
        email,
        password,
      }
    );
    dispatch(actionCreator(actionTypes.USER_LOGIN_SUCCESS, data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(
      actionCreator(
        actionTypes.USER_LOGIN_FAIL,
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
