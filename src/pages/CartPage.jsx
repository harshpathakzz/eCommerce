import React from "react";
import { useCart } from "../context/CartContext";
import {
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import CartProductCard from "../components/CartProductCard";
import CartHeader from "../components/CartHeader";
import { useNavigate } from "react-router-dom";
import EmptyCartMessage from "../components/EmptyCartMessage";

const CartPage = () => {
  const navigate = useNavigate();
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

  const handleRemove = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleCheckout = async () => {
    console.log(cart);
    dispatch({ type: "CLEAR_CART" });
    navigate("/order-placed");
  };

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );

  // Calculate the number of items in the cart
  const numItems = cart.reduce((total, product) => total + product.qty, 0);

  // Apply discount (if any)
  const discount = 10; // Assuming a 10% discount
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  return (
    <Box height="100vh" width="100vw" sx={{ flexGrow: 1 }}>
      <CartHeader />
      <Box sx={{ flexGrow: 1, height: "calc(100vh - 64px)", width: "100vw" }}>
        {cart.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <Grid container sx={{ height: "100%" }} spacing={2}>
            <Grid item xs={12} md={6}>
              {cart.map((product) => (
                <CartProductCard
                  key={product.id}
                  product={product}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleRemove={handleRemove}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  textAlign: "left",
                  width: "100%",
                  marginTop: 6,
                }}
              >
                <CardContent>
                  <Typography variant="h4">Price Details:</Typography>
                  <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    Price ({numItems}): ${totalPrice.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Discount price:{" "}
                    <span style={{ color: "#3f51b5" }}>
                      -${(totalPrice - discountedPrice).toFixed(2)}
                    </span>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Delivery Charges: FREE
                  </Typography>
                  <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                  <Typography variant="h6">
                    Total Price: ${discountedPrice.toFixed(2)}
                  </Typography>
                  <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;
