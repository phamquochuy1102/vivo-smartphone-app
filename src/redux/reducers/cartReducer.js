import { actionTypes } from "../constants";

const initialState = {
  cart: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  addStatus: false,
  shippingAddress: localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {},
  payAndDeliveryMethod: localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment"))
    : {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const cloneCart = [...state.cart];
      let alreadyInCart = false;
      cloneCart.forEach((product) => {
        if (product.id === action.payload.id) {
          alreadyInCart = true;
          product.quantity += action.payload.quantity;
        }
      });
      if (!alreadyInCart) {
        cloneCart.push(action.payload);
      }
      localStorage.setItem("cartItem", JSON.stringify(cloneCart));
      return {
        ...state,
        cart: cloneCart,
        addStatus: true,
      };
    case actionTypes.REMOVE_FROM_CART:
      const newCart = [...state.cart];
      localStorage.setItem(
        "cartItem",
        JSON.stringify(newCart.filter((item) => item.id !== action.payload))
      );
      return {
        ...state,
        cart: newCart.filter((item) => item.id !== action.payload),
      };
    case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case actionTypes.CART_SAVE_PAYMENT_DELIVERY_METHOD:
      return {
        ...state,
        payAndDeliveryMethod: action.payload,
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
