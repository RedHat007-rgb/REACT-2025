const TaskItem = (props) => {
  return (
    <div
      style={{
        background: "black",
        justifyContent: "center",
        padding: 20,
        borderRadius: 20,
        color: props.status === "completed" ? "green" : "red",
        width: 150,
      }}
    >
      <strong>{props.task}</strong>
      <br />
      <small>Status:{props.status}</small>
    </div>
  );
};

export default TaskItem;
