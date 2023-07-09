import React, { useState } from "react";

export default function CreateList(props) {
  const [product, setProduct] = useState("");

  const fromInputHandler = function (e) {
    // if (!e.target.value) return alert("please enter a Todo");
    setProduct(e.target.value);
    // console.log(todo);
  };

  const fromSubmitHandler = function (e) {
    e.preventDefault();
    const newProductList = {
      text: product,
    };
    // console.log(todoObj);
    setProduct("");
    props.onListInput(newProductList);
  };

  return (
    <form onSubmit={fromSubmitHandler}>
      <input type="text" value={product} onChange={fromInputHandler} />
      <div className="add-btn">
        <button className="add-btn" type="submit">
          📃 Add new product
        </button>
      </div>
    </form>
  );
}
