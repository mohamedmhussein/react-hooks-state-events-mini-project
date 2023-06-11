import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, catSelected, handleClick }) {


  // console.log(tasks, updatedTasks)

  const tasksToDisplay = tasks.filter(task => { return catSelected === "All" ? true : catSelected === task.category })
  console.log(tasksToDisplay)
  return (
    <div className="tasks">
      {tasksToDisplay.map(task => <Task key={uuid()} id={uuid()} category={task.category} task={task.text} handleClick={handleClick} />)}
    </div>
  );
}

export default TaskList;
