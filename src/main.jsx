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
import { SearchProvider } from "./context/SearchContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserAuthProvider>
        <CartProvider>
          <SearchProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </SearchProvider>
        </CartProvider>
      </UserAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
