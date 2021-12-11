import { useState } from "react/cjs/react.development";
import "./App.css";

function App() {
  const obj = [
    {
      id: 1,
      message: "This is a message",
      date: "20/12/2021",
      name: "Patiphan",
    },
  ];

  // const jsxArr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
  return (
    <div className="">
      <ul style={{ listStyle: "none" }}>
        {obj.map((el) => (
          <li>message: {el.message}</li>
        ))}
        {obj.map((el) => (
          <li>date: {el.date}</li>
        ))}
        {obj.map((el) => (
          <li>name: {el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
