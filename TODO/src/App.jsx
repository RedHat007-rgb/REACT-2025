import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TodoItem from './Components/todo-item/TodoItem';
import { useState } from 'react';
import styles from '../styles';


function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    const newArray = [
      ...todos,
      {
        id: Date.now(),
        name: text,
        isCompleted: false
      }
    ];
    setTodos(newArray);
    setText("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.todoContainer}>
        <div style={styles.inputContainer}>
          <TextField 
            onChange={(e) => setText(e.target.value)}
            value={text}
            variant="outlined"
            placeholder="Enter your TODO here"
            style={styles.input}
          />
          <Button 
            onClick={handleClick} 
            variant="contained"
            style={styles.button}
          >
            Create
          </Button>
        </div>
        <ul style={styles.todoList}>
          {todos.map((todo,index) => (
            <TodoItem key={todo.id}
                      name={todo.name}
                      onToggle={(check)=>{
                          const newArray=[...todos];
                          newArray[index].isCompleted=check;
                          setTodos(newArray);
                        }
                      }
                      checked={todo.isCompleted}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;
