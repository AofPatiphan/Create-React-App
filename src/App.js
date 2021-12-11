import "./App.css";

function App() {
  const arr = [
    { message: "Happy new year", name: "John", date: "1/1/2021 00.01AM" },
    { message: "Programing is fun", name: "Jack", date: "30/6/2021 10.23AM" },
    { message: "Oh Amazing !!!", name: "Sarah", date: "23/7/2021 08.17PM" },
  ];

  const result = arr.map((el) => (
    <div
      style={{ border: "1px solid grey", margin: "20px", padding: "0 1rem" }}
    >
      <h2>{el.message}</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{}}>Author: {el.name}</p>
        <p style={{}}>{el.date}</p>
      </div>
    </div>
  ));
  return <div className="">{result}</div>;
}

export default App;
