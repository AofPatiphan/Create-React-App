import "./App.css";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const handleClickCheck = () => {
    if (phone === "") {
      setError("Phone number is required");
    } else if (isNaN(phone.trim())) {
      setError("Invalid phone number");
    } else if (phone.length !== 10) {
      setError("Invalid length");
    } else {
      setError("");
    }
  };

  const style = error === "" ? null : { borderColor: "red" };

  return (
    <div className="App">
      <input
        type="text"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        style={style}
      />
      <button onClick={handleClickCheck}>Check</button>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </div>
  );
}

export default App;
