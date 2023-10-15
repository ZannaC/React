import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemAddButtonForm.module.css";

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onAddToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: `amount_${props.id}`,
          value: amount.toString(),
          onChange: handleAmountChange,
          onBlur: () => {},
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
