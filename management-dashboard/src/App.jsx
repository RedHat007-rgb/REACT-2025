import { useState } from "react";
import "./App.css";
import TaskItem from "./Components/TaskItem";
import AddTaskForm from "./Components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const updateTasks = (task) => {
    let newArray = [...tasks, task];
    setTasks(newArray);
  };

  return (
    <>
      <AddTaskForm handler={updateTasks} />
    </>
  );
}

export default App;
