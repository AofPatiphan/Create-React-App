const Province = () => {
  return (
    <div>
      <label for="province">Province:</label>
      <select name="province" id="province">
        <option value="">SELECT</option>
        <option value="BANGKOK">Bangkok</option>
        <option value="PHUKET">Phuket</option>
        <option value="RANONG">Ranong</option>
      </select>
    </div>
  );
};

export default Province;
