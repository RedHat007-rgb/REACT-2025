import Checkbox from "@mui/material/Checkbox";
import  styles  from "./styles";

const TodoItem = (props) => {
  return (
    <li style={styles.todoItem}>
    <Checkbox checked={props.checked} onChange={(e)=>props.onToggle(e.target.checked)}/>
    <p style={props.checked ? styles.todoText1:styles.todoText}>{props.name}</p>
    </li>
  );
};



export default TodoItem;
