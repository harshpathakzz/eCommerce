import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import productsData from "../DB/products";

const Home = () => {
  const { state } = useCart();

  console.log("Hello");
  console.log("state", state);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {productsData.map((product) => (
            <Grid item key={product.id} style={{ marginBottom: "20px" }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Home;