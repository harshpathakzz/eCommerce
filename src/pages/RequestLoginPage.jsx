import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RequestLoginPage = () => {
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
          Please login to continue
        </Typography>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default RequestLoginPage;
