import { useState } from "react/cjs/react.development";
import "./App.css";

let id = 3;

function App() {
  const arr = [1, 2, 3, 4, 2, 1];

  const [obj, setObj] = useState([
    {
      id: 1,
      title: "A",
    },
    {
      id: 2,
      title: "B",
    },
  ]);

  const handleClick = () => {
    const input = window.prompt("Enter something");
    const newState = [{ id: id++, title: input }, ...obj];
    setObj(newState);
  };

  // const jsxArr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
  const result = arr.map((el) => <li>{el}</li>); // ทำแบบนี้
  return (
    <div className="App">
      <button onClick={handleClick}>Add</button>
      <ul>
        {/* <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li> */}
        {/* {result} */}
        {obj.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
