import { useState } from "react";

const Task = (props) => {
  const [toggle, setToggle] = useState(true);

  const toggleDescription = () => {
    setToggle(!toggle);
  };
  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        margin: "10px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "5px 0" }}>{props.title}</h3>
      <p style={{ margin: "5px 0", fontSize: "14px", opacity: "0.8" }}>
        Deadline: {props.deadline}
      </p>
      {!toggle ? (
        <p style={{ margin: "10px 0", fontSize: "14px" }}>
          {props.description}
        </p>
      ) : null}
      <button
        onClick={toggleDescription}
        style={{
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        {toggle ? "Show Description" : "Hide Description"}
      </button>
    </div>
  );
};

export default Task;
