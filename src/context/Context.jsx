import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import productsData from "../DB/products";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const products = [...productsData];
  // console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  return useContext(CartContext);
};
