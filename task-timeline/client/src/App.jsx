import "./App.css";
import Header from "./Header";
import Task from "./Task";

function App() {
  return (
    <div className="main">
      {/* <Header /> */}
      <Task
        title="heading"
        deadline="24/12/1998"
        description="jhagjhfhkjakfgakghf"
      />
    </div>
  );
}

export default App;
