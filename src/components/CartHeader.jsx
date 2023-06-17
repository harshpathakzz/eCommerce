import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export default function CartHeader() {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Shopifyn
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}></Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={handleCartClick}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
