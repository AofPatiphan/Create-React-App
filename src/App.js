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

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("submited");
  };

  const handleChangeEmail = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      {/* //     <button onClick={handleClick1}>Click Me</button> */}
      {/* //     <button onClick={(event) => handleClick(event, 3)}>Click Me</button> */}

      {/* <button onClick={handleClick2(5)}>Click Me</button> */}

      <form onSubmit={handleSubmitForm}>
        <input name="email" onChange={handleChangeEmail} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
