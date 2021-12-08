import logo from "./logo.svg";
import "./App.css";

function App() {
  // // const handleClick = (event) => {
  // //   return console.log(event);
  // // };

  // ฟังก์ชัน รับพารามีเตอร์เป็นฟังก์ชันซ้อนกันอีกที ถ้างงก็ใช้ handleClick1 ไป
  // const handleClick2 = (id) => (event) => {
  //   return console.log(id);
  // };

  // // อยากส่ง event กับ id ต้องใส่ annonymous function ใน button แล้วมาเขียนฟังชันแยก
  // const handleClick1 = (event, id) => {
  //   return console.log(id);
  // };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const Option = (props) => {
    return (
      <>
        <option>{props.name}</option>
      </>
    );
  };
  return (
    <div className="App">
      <select onChange={handleChange}>
        <Option name="SELECT" />
        <Option name="Thailand" />
        <Option name="USA" />
        <Option name="England" />
        <Option name="China" />
        <Option name="Korea" />
      </select>
    </div>
  );
}

export default App;
