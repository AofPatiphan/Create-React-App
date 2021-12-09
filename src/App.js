import "./App.css";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("Phone number is require");
  return (
    <div className="App">
      <input
        type="text"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      {/* <button onClick={()=>}>Check</button> */}
      {error ? null : <p style={{ color: "red" }}>Error message</p>}
    </div>
  );
}

export default App;
