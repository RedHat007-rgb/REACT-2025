import { useState } from "react";

const AddTaskForm = (props) => {
  const [newTask, setNewTask] = useState({});

  const onCHangeHandler = (e) => {
    setNewTask({
      date: Date.UTC(),
      task: e.target.value,
      completed: false,
    });
  };

  return (
    <>
      <input
        // value={newTask}
        onChange={onCHangeHandler}
        placeholder="Enter the task"
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          outline: "none",
          marginRight: "10px",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      ></input>
      <button
        onClick={() => {
          props.handler(newTask);
        }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#28a745",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        Add Task
      </button>
    </>
  );
};

export default AddTaskForm;
