import React from "react";
import { useCart } from "../context/CartContext";
const Cart = () => {
  const {
    state: { cart },
  } = useCart();
  return (
    <>
      Cart:
      {cart.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};

export default Cart;
