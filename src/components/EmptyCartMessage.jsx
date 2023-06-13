import React from "react";
import { Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmptyCartMessage = () => {
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
          Hey, it feels so light!
        </Typography>
        <Typography variant="body1" gutterBottom>
          There is nothing in your cart. Let's add some items.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Add items
        </Button>
      </Paper>
    </div>
  );
};

export default EmptyCartMessage;
