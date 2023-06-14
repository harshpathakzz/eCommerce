import React, { useEffect, createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  // Load cart from local storage on component mount
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      dispatch({ type: "SET_CART", payload: JSON.parse(cartData) });
    }
  }, []);

  // Update local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

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
