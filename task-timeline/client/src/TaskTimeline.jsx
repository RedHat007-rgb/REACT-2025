import { useEffect, useState } from "react";
import axios from "axios";

const TaskTimeLine = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState("");
  const [call, setCall] = useState(false);

  useEffect(() => {
    if (call) {
      addData();
      setTimeout(() => {
        setResponse(null);
      }, 5000);
    }
  }, [call]);

  const addData = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:3000/create",
        data: {
          title: title,
          deadline: deadline,
          description: description,
        },
      });
      setResponse(res.data);
    } catch (error) {
      console.error(
        "Error adding task:",
        error.response ? error.response.data : error.message
      );
      setResponse(
        error.response?.data?.error || "Request failed, please try again later"
      );
    } finally {
      setTitle("");
      setDeadline("");
      setDescription("");
      setCall(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Add a New Task</h2>

      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title name:"
        value={title}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#007bff")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <input
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="Enter the Deadline:"
        type="date"
        value={deadline}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#007bff")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter the Description:"
        value={description}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#007bff")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <button
        onClick={() => setCall(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Add Task
      </button>

      {response && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "16px",
            color:
              response.includes("failed") || response.includes("error")
                ? "red"
                : "green",
          }}
        >
          {response}
        </p>
      )}
    </div>
  );
};

export default TaskTimeLine;
