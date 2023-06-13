import React from "react";
import { Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderPlacedPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Order Placed Successfully
        </Typography>
        <Typography variant="h6" gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Shop More
        </Button>
      </Paper>
    </div>
  );
};

export default OrderPlacedPage;
