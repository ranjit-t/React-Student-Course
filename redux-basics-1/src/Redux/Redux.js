// Redux.js
import { legacy_createStore as createStore } from "redux";

const initialState = {
  count: 10,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export const store = createStore(rootReducer);
