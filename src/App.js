import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClickAdd = () => {
    // setCount(5);
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClickAdd}>+</button>
    </>
  );
}

export default App;
