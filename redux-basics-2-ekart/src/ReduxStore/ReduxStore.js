import { legacy_createStore as createStore } from "redux";
import { products } from "../App";

const inState = {
  cart: products,
};

function rootReducer(state = inState, action) {
  switch (action.type) {
    case "addToCart":
      return {
        cart: state.cart.map((prod) => {
          if (prod.id === action.payload) {
            prod.numinCart = prod.numinCart + 1;
            return prod;
          } else {
            return prod;
          }
        }),
      };
    case "removeFromCart":
      return {
        cart: state.cart.map((prod) => {
          if (prod.id === action.payload) {
            if (prod.numinCart >= 1) prod.numinCart = prod.numinCart - 1;
            return prod;
          } else {
            return prod;
          }
        }),
      };
    case "resetCart":
      return {
        cart: state.cart.map((prod) => {
          if (prod.id === action.payload) {
            if (prod.numinCart >= 1) prod.numinCart = 0;
            return prod;
          } else {
            return prod;
          }
        }),
      };

    default:
      return state;
  }
}

export const store = createStore(rootReducer);
