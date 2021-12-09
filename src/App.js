import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [visible, setVisible] = useState(true);

  const handleClick = (event) => {
    // value = "hide";
    // state[0](value);
    setVisible(!visible); // วิธีลัด ถ้างงให้ดูด้านล่าง

    // if (visible === false) {
    //   setVisible(true);
    // } else {
    //   setVisible(false);
    // }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>
        {visible ? "Click to hide " : "Click to show"}
      </button>
      <h1 className={visible ? "" : "hide"}>Click button to hide me</h1>
    </div>
  );
}

export default App;
