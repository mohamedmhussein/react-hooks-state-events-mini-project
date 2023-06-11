import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, catSelected, handleClick }) {
  const TasksToDisplay = tasks.filter(task => { return catSelected === "All" ? true : catSelected === task.category })
    .map(task => <Task key={uuid()} category={task.category} task={task.text} handleClick={handleClick} id={uuid()} />)
  //console.log(TasksToDisplay)
  return (
    <div className="tasks">
      {TasksToDisplay}
    </div>
  );
}

export default TaskList;
