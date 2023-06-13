import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useUserAuth } from "../context/UserAuthContext";

const ProductCard = ({ product }) => {
  const { id, name, price, image, category, inStock, fastDelivery, rating } =
    product;
  const {
    state: { cart },
    dispatch,
  } = useCart();
  const { isLoggedIn } = useUserAuth();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const isProductInCart = () => {
    return cart.some((item) => item.id === product.id);
  };

  const handleAddToCart = () => {
    if (isLoggedIn) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    } else {
      setModalOpen(true);
    }
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong> ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Category:</strong> {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Availability:</strong>{" "}
            {inStock ? "In Stock" : "Out of Stock"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Fast Delivery:</strong> {fastDelivery ? "Yes" : "No"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              readOnly
            />
          </Typography>
          {inStock ? (
            isProductInCart() ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleGoToCart}
              >
                Go to Cart
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            )
          ) : (
            <Button variant="contained" color="primary" disabled>
              Out of Stock
            </Button>
          )}
        </CardContent>
      </Card>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,

            p: 3,
          }}
        >
          <Typography variant="h6">Please Login to Add to Cart</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ProductCard;
