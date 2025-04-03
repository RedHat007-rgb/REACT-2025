import "./App.css";
import TaskItem from "./Components/TaskItem";

function App() {
  return (
    <>
      <TaskItem task="added" status="completed" />
      <br />
      <TaskItem task="added" status="not completed" />
    </>
  );
}

export default App;
