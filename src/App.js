import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  if (show === false) {
    return null;
  }

  return (
    <div className="App">
      <button onClick={() => setShow(false)}>Click to hide me</button>
    </div>
  );
}

export default App;
