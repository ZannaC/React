import React from "react";
import "./TodoList.css";

export default function TodoList(props) {
  return (
    <div>
      {props.dummyTODO.map((todo) => (
        <li className="todoList"> 👉 {todo}</li>
      ))}
    </div>
  );
}
