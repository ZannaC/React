import React, { useState } from "react";

export default function TodoForm(props) {
  const [todo, setTodo] = useState("");

  const fromInputHandler = function (e) {
    if (!e.target.value) return alert("please enter a Todo");
    setTodo(e.target.value);
    // console.log(todo);
  };

  const fromSubmitHandler = function (e) {
    e.preventDefault();
    const todoObj = {
      text: todo,
    };
    // console.log(todoObj);
    setTodo("");
    props.onTODOInput(todoObj);
  };

  return (
    <form onSubmit={fromSubmitHandler}>
      <input type="text" value={todo} onChange={fromInputHandler} />
      <div>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
}
