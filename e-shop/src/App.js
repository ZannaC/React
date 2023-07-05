import Product from "./Product";
import Login from "./Login";
import "./styles.css";

function App() {
  return (
    <div>
      <Login />
      <div className="cart">
        <h1>Demo👀Shop</h1>
        <img src="/shopCart.png" alt="shopcart" />
      </div>
      <Product />
    </div>
  );
}
export default App;
