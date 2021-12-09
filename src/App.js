import logo from "./logo.svg";
// import "./App.css";
import Welcome from "./Welcome";
import styles from "./App.module.css";

function App() {
  const Item = (props) => {
    return (
      <>
        <span
          style={{
            marginRight: "20px",
            color: "green",
            textDecoration: "line-through",
          }}
        >
          {props.title}
        </span>
        <button
          style={{
            margin: "10px",
            border: "1px solid grey",
            borderRadius: "3px",
          }}
        >
          Edit
        </button>
        <button
          style={{
            margin: "10px",
            border: "1px solid grey",
            borderRadius: "3px",
          }}
        >
          Delete
        </button>
        <br />
      </>
    );
  };
  return (
    <div>
      <button
        style={{
          margin: "20px 30px",
          border: "1px solid grey",
          borderRadius: "3px",
        }}
      >
        Add
      </button>
      <ul>
        <Item
          title="Task 1"
          styles={{ color: "deep-green", textDecoration: "line-through" }}
        />
        <span style={{ marginRight: "20px" }}>Task 2</span>
        <button
          style={{
            margin: "10px",
            border: "1px solid grey",
            borderRadius: "3px",
          }}
        >
          Edit
        </button>
        <button
          style={{
            margin: "10px",
            border: "1px solid grey",
            borderRadius: "3px",
          }}
        >
          Delete
        </button>
      </ul>
    </div>
  );
}
export default App;
