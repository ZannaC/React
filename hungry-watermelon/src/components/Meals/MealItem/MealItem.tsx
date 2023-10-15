import React, { useContext } from "react";
import MealItemAddButtonForm from "./MealItemAddButtonForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem: React.FC<MealItemProps> = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemAddButtonForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
