import Product from "./Product";
import "./styles.css";

function App() {
  const list = [
    {
      title: "Product 1",
      price: 10,
      description: "First product 📦",
    },
    {
      title: "Product 2",
      price: 20,
      description: "Second product 📦📦",
    },
    {
      title: "Product 3",
      price: 30,
      description: "Third product 📦📦📦",
    },
  ];
  return (
    <div>
      <div className="cart">
        <h1>Demo👀Shop</h1>
        <img src="/shopCart.png" alt="" />
      </div>
      <Product
        title={list[0].title}
        price={list[0].price}
        description={list[0].description}
      ></Product>
      <Product
        title={list[1].title}
        price={list[1].price}
        description={list[1].description}
      ></Product>
      <Product
        title={list[2].title}
        price={list[2].price}
        description={list[2].description}
      ></Product>
    </div>
  );
}
export default App;
