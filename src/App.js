import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App ">
      <button onClick={() => setShowText(false)}>Click to hide text</button>
      {showText ? <h3>Text</h3> : null}
    </div>
  );
}

export default App;
