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
    } catch {
      setResponse("eroor");
    } finally {
      setTitle("");
      setDeadline("");
      setDescription("");
      setCall(false);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Enter the title name:"
        value={title}
      />

      <input
        onChange={(e) => {
          setDeadline(e.target.value);
        }}
        placeholder="Enter the Deadline:"
        type="date"
        value={deadline}
      />

      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Enter the Description:"
        value={description}
      />

      <button
        onClick={() => {
          setCall(!call);
        }}
      >
        Add Task
      </button>
      {response ? response : null}
    </div>
  );
};

export default TaskTimeLine;
