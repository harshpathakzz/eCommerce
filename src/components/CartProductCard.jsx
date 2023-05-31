import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { AddCircle, RemoveCircle, Close } from "@mui/icons-material";

const CartProductCard = ({
  product,
  handleIncrement,
  handleDecrement,
  handleRemove,
}) => {
  // Calculate subtotal for the product
  const subtotal = product.price * product.qty;

  return (
    <Card key={product.id} sx={{ display: "flex", mb: 2 }}>
      <CardMedia
        component="img"
        src={product.image}
        alt={product.name}
        sx={{ width: 200, objectFit: "cover" }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{product.name}</Typography>
          <IconButton
            aria-label="remove"
            size="small"
            onClick={() => handleRemove(product)}
          >
            <Close />
          </IconButton>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Quantity: {product.qty}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            fontWeight: "bold",
            mt: 2,
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Subtotal: ${subtotal}
          </Typography>
        </Box>
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
