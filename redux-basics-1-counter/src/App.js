//App.js
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  // console.log(count);

  return (
    <div className="App">
      <h2>Redux Basics 1</h2>
      <p>Count is : </p>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
