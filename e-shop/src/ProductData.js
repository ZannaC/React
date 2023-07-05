import React from "react";
function ProductData() {
  const list = [
    {
      title: "Product 1",
      price: 10,
      description: "First product 📦",
      id: 1,
    },
    {
      title: "Product 2",
      price: 20,
      description: "Second product 📦📦",
      id: 2,
    },
    {
      title: "Product 3",
      price: 30,
      description: "Third product 📦📦📦",
      id: 3,
    },
  ];
  return (
    <div>
      {list.map((product, id) => (
        <div className="product" key={id}>
          <h2>{product.title}</h2>
          <p className="price">💰 Price: {product.price}$</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
export default ProductData;
