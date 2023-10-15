import React from "react";

interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface CartContextData {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextData>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
