import { useState } from "react/cjs/react.development";
import "./App.css";

let id = 1;

function App() {
  const [obj, setObj] = useState([]);

  let result = "";

  const hancleChange = (event) => {
    return (result = event.target.value);
  };

  const handleClick = () => {
    const newState = [{ id: id++, title: result }, ...obj];
    setObj(newState);
  };

  return (
    <div className="App">
      <input type="text" onChange={hancleChange} />
      <button onClick={handleClick}>Add</button>
      <ul style={{ listStyle: "none" }}>
        {obj.map((el) => (
          <li key={el.id}>
            {el.title}
            <button className="button">Edit</button>
            <button className="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   let state = useState(""); //ค่าเริ่มต้นที่จะให้โชว์ อันนี้ตั้งเป็น empty string return ค่าเป็น array โดย index 0 เก็บค่า state ปัจจุบัน,index 1 เก็บฟังก์ชันที่ใช้อัพเดทค่า state
//   let state1 = useState("");
//   let [country, setCountry] = useState("Thailand");
//   let [population, setPopulation] = useState("1000");
//   let value = "";

//   const handleChange = (event) => {
//     value = event.target.value; //ประกาศตัวแปรมารับค่าที่พิมพ์เข้าไป
//     state[1](value); // ให้ state ถัดมาเป็นค่าที่พิมพ์เข้าไป //ของเดิม state[0] เป็น ""
//   };
//   const handleChange1 = (event) => {
//     value = event.target.value; //ประกาศตัวแปรมารับค่าที่พิมพ์เข้าไป
//     state1[1](value); // ให้ state ถัดมาเป็นค่าที่พิมพ์เข้าไป //ของเดิม state[0] เป็น ""
//   };
//   const handleChange2 = (event) => {
//     value = event.target.value; //ประกาศตัวแปรมารับค่าที่พิมพ์เข้าไป
//     setCountry(value); // ให้ state ถัดมาเป็นค่าที่พิมพ์เข้าไป //ของเดิม state[0] เป็น "" , setCountry คือ index 1 ที่เก็บค่าที่พิมพ์เข้าไป
//   };
//   const handleChange3 = (event) => {
//     value = event.target.value; //ประกาศตัวแปรมารับค่าที่พิมพ์เข้าไป
//     setPopulation(value); // ให้ state ถัดมาเป็นค่าที่พิมพ์เข้าไป //ของเดิม state[0] เป็น ""
//   };

//   return (
//     <div className="App">
//       <h1>{state[0]}</h1>
//       <input type="text" onChange={handleChange} />
//       <h1>{state1[0]}</h1>
//       <input type="text" onChange={handleChange1} />
//       <h1>{country}</h1>
//       <input type="text" onChange={handleChange2} />
//       <h1>{population}</h1>
//       <input type="text" onChange={handleChange3} />
//     </div>
//   );
// }

// export default App;
