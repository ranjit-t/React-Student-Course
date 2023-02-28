import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "NewInput":
      return { ...state, Input: action.payload };
    case "decrease":
      return { ...state, count: state.count - 1 };
    case "increase":
      return { ...state, count: state.count + 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      console.log("something is wrong");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { Input: "", count: 0 });
  return (
    <div className="App">
      <h2>useReducer Demo</h2>
      <input
        type="text"
        placeholder="enter and see the magic"
        onChange={(e) => {
          dispatch({ type: "NewInput", payload: e.target.value });
        }}
      />
      <p>{state.Input.length === 0 ? <span>Welcome</span> : state.Input}</p>
      <div>
        <p>{state.count}</p>
        <p>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "decrease" });
            }}
          >
            -
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "increase" });
            }}
          >
            +
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
