// ✅ Interactive Todo List – Project Checklist (Using Vite)
// 🔲 Set up your project using Vite (npm create vite@latest todo-app --template react)
// 🔲 Create a TodoList component
// 🔲 Use useState to store an array of todos (const [todos, setTodos] = useState([]))
// 🔲 Create an input field & button to add new tasks
// 🔲 Handle onChange event to update input value in state
// 🔲 Handle onClick event to add a new task to the list🔲 Render tasks dynamically using .map()
// 🔲 Pass tasks as props to a TodoItem child component🔲 Add a "Delete" button next to each task
// 🔲 Use an onClick event to remove a task from the list
// 🔲 Create an "Edit" button to modify an existing task
// 🔲 Handle form submission (onSubmit) to prevent default behavior
// 🔲 Use event delegation if needed for better performance

import { useState } from "react";

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "300px",
      margin: "auto",
      marginTop: "20px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    },
    input: {
      padding: "10px",
      width: "80%",
      fontSize: "16px",
      border: "2px solid #ccc",
      borderRadius: "5px",
      outline: "none",
      marginBottom: "10px",
    },
    button: {
      padding: "10px 15px",
      fontSize: "16px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: "10px",
      marginBottom: "10px",
    },
    todoItem: {
      backgroundColor: "#f8f9fa",
      padding: "10px",
      borderRadius: "5px",
      width: "100%",
      textAlign: "center",
      marginBottom: "5px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
    },
  };

  function todoupdate() {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  function todoInput(e) {
    setInput(e.target.value);
  }

  return (
    <div style={style.container}>
      
      <input
        style={style.input}
        onChange={todoInput}
        value={input}
        placeholder="Please input your Task"
      />
      <button style={style.button} onClick={todoupdate}>ADD TASK</button>
      {todos.map((todo, index) => (
        <p key={index} style={style.todoItem}>{todo}</p>
      ))}
    </div>
  );
}

export default App


