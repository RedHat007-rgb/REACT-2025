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
      ></input>
      <button
        onClick={() => {
          props.handler(newTask);
        }}
      >
        Add Task
      </button>
    </>
  );
};

export default AddTaskForm;
