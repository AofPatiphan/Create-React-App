import "./App.css";
import { useState } from "react";

const mapProvinceDistrict = {
  BANGKOK: ["BANGBON", "BANGKHAE", "BANGKAPI"],
  PHUKET: ["KATHU", "THALANG"],
  RANONG: ["KRA BURI", "KA POE"],
};

function App() {
  const [selectedProvince, setSelectedProvince] = useState("");

  const option =
    selectedProvince === ""
      ? null
      : mapProvinceDistrict[selectedProvince].map((el) => (
          <option value={el}>{el}</option>
        ));

  return (
    <div className="App">
      <div>
        <label>Ptovince : </label>
        <select
          value={selectedProvince}
          onChange={(event) => setSelectedProvince(event.target.value)}
        >
          <option value="">SELECT</option>
          <option value="BANGKOK">BANGKOK</option>
          <option value="PHUKET">PHUKET</option>
          <option value="RANONG">RANONG</option>
        </select>
      </div>
      <div>
        <label>District : </label>
        <select>
          <option value="">SELECT</option>
          {option}
        </select>
      </div>
    </div>
  );
}

export default App;
