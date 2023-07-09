import React from "react";
import "./index.css";

export default function AddProduct(props) {
  return (
    <div className="products">
      {props.new.map((product) => (
        <li> 🛒 {product}</li>
      ))}
    </div>
  );
}
