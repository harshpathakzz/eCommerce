import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";
import { Grid, Button, Typography, Pagination } from "@mui/material";
import productsData from "../DB/products";

const Home = () => {
  const { state } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change the page
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

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
          {currentProducts.map((product) => (
            <Grid item key={product.id} style={{ marginBottom: "20px" }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
        />
      </div>
    </>
  );
};

export default Home;
