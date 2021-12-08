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
    console.log(`${event.target.name}:  ${event.target.value}`);
  };

  const Label = (props) => {
    return (
      <>
        <input
          type="checkbox"
          onChange={handleChange}
          name={props.name}
          value={props.value}
        />
        <label>{props.name}</label>
      </>
    );
  };
  return (
    <div className="App">
      <Label name="phone1" value="Samsung" />
      <Label name="phone2" value="Apple" />
      <Label name="phone3" value="Huawei" />
    </div>
  );
}

export default App;
