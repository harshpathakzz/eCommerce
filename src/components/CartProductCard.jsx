import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

const CartProductCard = ({ product, handleIncrement, handleDecrement }) => {
  return (
    <Card key={product.id} sx={{ display: "flex", mb: 2 }}>
      <CardMedia
        component="img"
        src={product.image}
        alt={product.name}
        sx={{ width: 200, objectFit: "cover" }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Quantity: {product.qty}
        </Typography>
        <div>
          <IconButton
            aria-label="decrement"
            size="small"
            onClick={() => handleDecrement(product)}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            aria-label="increment"
            size="small"
            onClick={() => handleIncrement(product)}
          >
            <AddCircle />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartProductCard;
