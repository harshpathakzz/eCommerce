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
  Paper,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useUserAuth } from "../context/UserAuthContext";

const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
};

const ProductCard = ({ product }) => {
  const { id, title, price, image, category, rating } = product;
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
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {truncateString(title, 20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong> ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Category:</strong> {category}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Rating
              name="half-rating-read"
              value={rating.rate}
              precision={0.5}
              readOnly
            />
            <span>({rating.count})</span>
          </Typography>
          {isProductInCart() ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleGoToCart}
              sx={{ mt: 2 }}
            >
              Go to Cart
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              sx={{ mt: 2 }}
            >
              Add to Cart
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
            width: 450,
            p: 4,
          }}
        >
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">
              Please log in to add items to your cart
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/login")}
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default ProductCard;
