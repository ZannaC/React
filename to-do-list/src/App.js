import React, { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import PlanIt from "./PlanIt";
import "./TodoList.css";

const DUMMY_TODOS = ["Go swimming", "Family game", "Ride a bike"];

export default function App() {
  const [dummyTODOS, setdummyTodo] = useState(DUMMY_TODOS);

  const showTODOHandler = function (todoinput) {
    setdummyTodo(function (dummyarray) {
      return [todoinput.text, ...dummyarray];
    });
  };

  const Tasks = ["Learn React", "Practice React", "Profit!"];

  return (
    <div>
      <ul>
        <TodoForm onTODOInput={showTODOHandler} />
        <TodoList dummyTODO={dummyTODOS} />
      </ul>
      <ul>
        {Tasks.map((newTask) => (
          <PlanIt yourPlanTask={newTask} />
        ))}
      </ul>
    </div>
  );
}
