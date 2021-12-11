import { useState } from "react/cjs/react.development";
import "./App.css";

function App() {
  const arr = ["Same", "Mhoo", "Tor", "Bam", "Jay", "Oak"];

  const result = arr.map((el) => <li>{el}</li>); // ทำแบบนี้
  return (
    <div className="">
      <ul>{result}</ul>
    </div>
  );
}

export default App;
