import { actionTypes } from "../constants";

const initialState = {
  products: [],
  type: "all",
  filterProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filterProducts: action.payload,
      };

    case actionTypes.FILTER_PRODUCTS:
      state.type = action.payload;
      if (state.type === "all") {
        state.filterProducts = state.products.slice();
      } else {
        state.filterProducts = state.products
          .filter((product) => product.type === state.type)
          .slice();
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default productsReducer;
