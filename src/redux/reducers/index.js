import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  userReducer,
});
export default rootReducer;
