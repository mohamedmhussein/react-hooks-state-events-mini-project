import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Task({ category, task, handleClick, id }) {

  // const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={e => handleClick(e, task)}>X</button>
    </div>
  );
}

export default Task;
