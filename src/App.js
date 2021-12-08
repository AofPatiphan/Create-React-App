import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleChangeEmail = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <input name="email" onChange={handleChangeEmail} />
    </div>
  );
}

export default App;
