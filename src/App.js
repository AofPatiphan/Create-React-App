import logo from "./logo.svg";
import "./App.css";
import Item from "./Component/Item";

function App() {
  return (
    <>
      <button>Add</button>
      <ul>
        <Item title="Task 1" />
        <Item title="Task 2" />
      </ul>
    </>
  );
}

export default App;
