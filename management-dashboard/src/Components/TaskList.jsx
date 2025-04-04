import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const [state, setState] = useState("all"); // Default to "all" for better UX

  let completed_tasks = props.tasks.filter((item) => item.completed === true);
  let not_completed_tasks = props.tasks.filter(
    (item) => item.completed === false
  );

  // Common styles for reusability
  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 5px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const noTasksStyle = {
    textAlign: "center",
    color: "#666",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
      {props.tasks.length === 0 ? (
        <h2 style={noTasksStyle}>Sorry, there are no tasks available</h2>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              ...buttonStyle,
              backgroundColor: state === "all" ? "#0056b3" : "#007bff",
            }}
            onClick={() => setState("all")}
          >
            All Tasks
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: state === "completed" ? "#0056b3" : "#007bff",
            }}
            onClick={() => setState("completed")}
          >
            Completed
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor:
                state === "not completed" ? "#0056b3" : "#007bff",
            }}
            onClick={() => setState("not completed")}
          >
            Not Completed
          </button>
        </div>
      )}
      {state === "all" ? (
        props.tasks.map((item) => (
          <TaskItem key={item.id} task={item.task} status={item.completed} />
        ))
      ) : state === "completed" ? (
        completed_tasks.length === 0 ? (
          <h3 style={noTasksStyle}>Sorry, there are no completed tasks</h3>
        ) : (
          completed_tasks.map((item) => (
            <TaskItem key={item.id} task={item.task} status={item.completed} />
          ))
        )
      ) : state === "not completed" ? (
        not_completed_tasks.map((item) => (
          <TaskItem key={item.id} task={item.task} status={item.completed} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskList;
