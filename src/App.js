import "./App.css";
import { useState } from "react";

function App() {
  let state = useState(""); //ค่าเริ่มต้นที่จะให้โชว์ อันนี้ตั้งเป็น empty string return ค่าเป็น array โดย index 0 เก็บค่า state ปัจจุบัน,index 1 เก็บฟังก์ชันที่ใช้อัพเดทค่า state
  let value = "";

  const handleClick = (event) => {
    value = "hide"; //ประกาศตัวแปรมารับค่าที่พิมพ์เข้าไป
    state[1](value); // ให้ state ถัดมาเป็นค่าที่พิมพ์เข้าไป //ของเดิม state[0] เป็น ""
  };

  return (
    <div className="App ">
      <button onClick={handleClick}>Click to hide text</button>
      <h1 className={state[0]}>Text</h1>
    </div>
  );
}

export default App;
