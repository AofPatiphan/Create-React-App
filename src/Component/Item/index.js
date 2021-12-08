import "./style.css";
const Item = (props) => {
  return (
    <li>
      <span>{props.title}</span>
      <button>edit</button>
      <button>Delete</button>
    </li>
  );
};
export default Item;
