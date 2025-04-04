import { useState } from "react";
import "./App.css";
import TaskItem from "./Components/TaskItem";
import AddTaskForm from "./Components/AddTaskForm";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const updateTasks = (task) => {
    let newArray = [...tasks, task];
    setTasks(newArray);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "30px",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Task Management Dashboard
      </h1>
      <AddTaskForm handler={updateTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
