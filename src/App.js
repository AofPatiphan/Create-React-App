import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  return (
    <div className="App">
      <label>Enter Dollar:</label>
      <input
        type="text"
        onChange={(event) => setAmount(event.target.value)}
        value={amount}
      />
      <p>
        Convert to Baht:
        <span style={{ color: "red" }}> {amount * 30}</span> Baht
      </p>
    </div>
  );
}

export default App;
