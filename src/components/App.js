import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [catSelected, setCatSelected] = useState("All")


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} catSelected={catSelected} setCatSelected={setCatSelected} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={TASKS} catSelected={catSelected} />
    </div>
  );
}

export default App;
