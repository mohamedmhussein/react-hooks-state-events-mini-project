import React, { useState } from "react";

function Task({ category, task }) {

  const [isClicked, setIsClicked] = useState(false)
  function handleClick(e) {
    setIsClicked(true)
    e.target.parentElement.remove()
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={e => handleClick(e)}>X</button>
    </div>
  );
}

export default Task;
