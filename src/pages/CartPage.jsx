import React from "react";
import { useCart } from "../context/CartContext";
import { Typography } from "@mui/material";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const handleIncrement = (product) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };

  const handleDecrement = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  return (
    <>
      <Typography variant="h6">Cart:</Typography>
      {cart.map((item) => (
        <CartProductCard
          key={item.id}
          product={item}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))}
    </>
  );
};

export default Cart;
