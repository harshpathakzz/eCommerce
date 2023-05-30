import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Button,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const { name, price, image, category, inStock, fastDelivery, rating } =
    product;

  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <Card>
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
          <strong>Availability:</strong> {inStock ? "In Stock" : "Out of Stock"}
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
        {addedToCart ? (
          <Button variant="contained" color="primary" onClick={handleGoToCart}>
            Go to Cart
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
