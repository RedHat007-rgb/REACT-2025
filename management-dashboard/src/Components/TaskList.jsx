import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const [state, setState] = useState("");

  let completed_tasks = props.tasks.filter((item) => item.completed == true);
  let not_completed_tasks = props.tasks.filter(
    (item) => item.completed == false
  );

  return (
    <>
      {props.tasks.length == 0 ? (
        <h2>Sorry there are no tasks available</h2>
      ) : (
        <div>
          <button onClick={() => setState("all")}></button>
          <button onClick={() => setState("completed")}></button>
          <button onClick={() => setState("not completed")}></button>
        </div>
      )}
      {state == "all" ? (
        props.tasks.map((item) => (
          <TaskItem task={item.task} status={item.completed} />
        ))
      ) : state == "completed" ? (
        completed_tasks.length == 0 ? (
          <h3>sorry there are no completed tasks</h3>
        ) : (
          completed_tasks.map((item) => (
            <TaskItem task={item.task} status={item.completed} />
          ))
        )
      ) : state == "not completed" ? (
        not_completed_tasks.map((item) => (
          <TaskItem task={item.task} status={item.completed} />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default TaskList;

// <>
//       {props.tasks.length == 0 ? (
//         <h2>Sorry there are no tasks,please add tasks..</h2>
//       ) : (
//         <div>
//           <button
//             onClick={() => {
//               //   setState("all");
//               buttonHandler("all");
//             }}
//           >
//             Show All TAsks
//           </button>
//           <button
//             onClick={() => {
//               buttonHandler("completed");
//             }}
//           >
//             Completed Tasks
//           </button>
//           <button
//             onClick={() => {
//               buttonHandler("not completed");
//             }}
//           >
//             Pending Tasks
//           </button>
//         </div>
//       )}
//     </>

// const buttonHandler = (state) => {
//     if (state == "all") {
//       return (
//         <>
//           {props.tasks.map((item) => {
//             return <TaskItem task={item.task} status={item.completed} />;
//           })}
//         </>
//       );
//     } else if (state == "completed") {
//       let completed_tasks = props.tasks.filter(
//         (item) => item.completed == true
//       );
//       return (
//         <>
//           {completed_tasks.map((item) => {
//             return <TaskItem task={item.task} status={item.completed} />;
//           })}
//         </>
//       );
//     } else if (state == "not completed") {
//       let not_completed_tasks = props.tasks.filter(
//         (item) => item.completed == false
//       );
//       return (
//         <>
//           {not_completed_tasks.map((item) => {
//             return <TaskItem task={item.task} status={item.completed} />;
//           })}
//         </>
//       );
//     }
//   }
