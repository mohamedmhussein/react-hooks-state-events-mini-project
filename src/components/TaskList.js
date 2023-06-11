import React from "react";
import Task from "./Task";

function TaskList({ tasks, catSelected }) {

  const tasksToDisplay = tasks.filter(task => { return catSelected === "All" ? true : catSelected === task.category })
  console.log(catSelected, tasks)
  return (
    <div className="tasks">
      {tasksToDisplay.map(task => <Task key={task.text} category={task.category} task={task.text} />)
        // .filter(task => { return catSelected === "All" ? true : catSelected === task.category })
      }
    </div>
  );
}

export default TaskList;
