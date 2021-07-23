import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import { orderReducer } from "./orderReducer";

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  userReducer,
  orderReducer,
});
export default rootReducer;
