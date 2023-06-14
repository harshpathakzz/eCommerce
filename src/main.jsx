import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./context/CartContext";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { UserAuthProvider } from "./context/UserAuthContext.jsx";
import { FilterProvider } from "./context/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserAuthProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
      </UserAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
