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
    <>
      <AddTaskForm handler={updateTasks} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
