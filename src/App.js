import "./App.css";
import { useState } from "react";

function App() {
  let state1 = useState("");
  let value = "";

  let state = useState("");
  const handleClick = (event) => {
    value = "hide";
    state[1](value);
  };

  return (
    <div className="App">
      <button onClick={handleClick} className={state[0]}>
        Click to hide me
      </button>
    </div>
  );
}

export default App;
