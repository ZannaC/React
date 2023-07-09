import React, { useState } from "react";
import "./index.css";

import CreateList from "./CreateList";
import AddProduct from "./AddProduct";

const mainProducts = ["Milk", "Meet", "Fruits"];

export default function App() {
  const [newList, setNewProductItems] = useState(mainProducts);

  const showListHandler = function (addProduct) {
    setNewProductItems(function (mainProducts) {
      return [addProduct.text, ...mainProducts];
    });
  };

  return (
    <div>
      <ul>
        <CreateList onListInput={showListHandler} />
        <AddProduct new={newList} />
      </ul>
    </div>
  );
}
