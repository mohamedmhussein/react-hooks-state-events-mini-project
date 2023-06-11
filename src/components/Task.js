import React from "react";

function Task({ category, task, handleClick, id }) {
  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={() => handleClick(task)}>X</button>
    </div>
  );
}

export default Task;
