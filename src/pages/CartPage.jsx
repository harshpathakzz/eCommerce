import React from "react";
import { useCart } from "../context/CartContext";
import {
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import CartProductCard from "../components/CartProductCard";
import CartHeader from "../components/CartHeader";

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
    <Box height="100vh" width="100vw" sx={{ flexGrow: 1 }}>
      <CartHeader />
      <Box sx={{ flexGrow: 1, height: "calc(100vh - 64px)", width: "100vw" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Cart:</Typography>
            {cart.map((item) => (
              <CartProductCard
                key={item.id}
                product={item}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={4} mt={2}>
            <Card sx={{ textAlign: "center", height: "100%" }}>
              <CardContent>
                <Typography variant="h6">Total Price:</Typography>
                <Button variant="contained" color="primary">
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Cart;
