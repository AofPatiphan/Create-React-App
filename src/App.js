import logo from "./logo.svg";
// import "./App.css";
import Welcome from "./Welcome";
import styles from "./App.module.css";

// เก็บ style ไว้ในตัวแปร แล้วเอาไปใส่ inline
function App() {
  const divStyle = {
    color: "red",
    textAlign: "center",
    margin: "20px 10px",
    padding: "10px",
  };
  return (
    <div className={styles.container}>
      <div style={divStyle}>Hello React Basic Styling</div>
      <div className="text-success ms-5">Hello React Basic Styling</div>
      <div className={styles["main-div"]}>Hello React Basic Styling</div>
      <Welcome />
    </div>
  );
}

export default App;
