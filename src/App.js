import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{
          margin: "10px",
          border: "1px solid gray",
          borderRadius: "2px",
          width: "30px",
        }}
      >
        +
      </button>
      <span style={{ margin: "10px" }}>0</span>
      <button
        style={{
          margin: "10px",
          border: "1px solid gray",
          borderRadius: "2px",
          width: "30px",
        }}
      >
        -
      </button>
      <button
        style={{
          margin: "10px",
          border: "1px solid gray",
          borderRadius: "2px",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
