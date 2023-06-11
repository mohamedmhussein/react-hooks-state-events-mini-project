import React, { useState } from "react";
import Task from "./Task";
function TaskList({ tasks, handleClick }) {
  //console.log(tasks)
  return (
    <div className="tasks">
      {tasks.map((task, index) => <Task key={index} category={task.category} text={task.text} handleClick={handleClick} />)}
    </div>
  );
}

export default TaskList;
