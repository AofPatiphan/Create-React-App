import "./App.css";
import { Welcome, sum } from "./welcome";
import { Hello } from "./component/Hello";
import Home, { day } from "./pages/Home";
import Login from "./Login";

function App() {
  const result = sum(3, 4);
  return (
    <div>
      Hello React {result}
      <Welcome />
      <Hello />
      <Home />
      {day}
      <Login />
    </div>
  );
}

export default App;
