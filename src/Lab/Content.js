import "./style.css";
const Content = () => {
  return (
    <>
      <button className="btn-add">Add</button>
      <ul>
        <span>Task 1</span>
        <button className="btn-edit">Edit</button>
        <button className="btn-del btn">Del</button>
        <br />
        <br />
        <span>Task 2</span>
        <button className="btn-edit" btn>
          Edit
        </button>
        <button className="btn-del btn">Del</button>
      </ul>
    </>
  );
};
export default Content;
