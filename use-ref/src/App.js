import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [value, setValue] = useState("Welcome");
  const inputEl = useRef(null);

  function handleChange(e) {
    if (!inputEl.current.value) {
      setValue("Welcome");
    } else {
      setValue(inputEl.current.value);
    }
  }

  return (
    <div className="App">
      <form>
        <label>
          Enter : <input type="text" ref={inputEl} onChange={handleChange} />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            inputEl.current.focus();
          }}
        >
          Focus
        </button>
        <p>{value}</p>
      </form>
    </div>
  );
}

export default App;
