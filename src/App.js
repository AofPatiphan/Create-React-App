import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = (event) => {
    if (window.confirm("Leave for https://google.com?")) {
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className="App">
      <a href="https://google.com" onClick={handleClick}>
        Google
      </a>
    </div>
  );
}

export default App;
