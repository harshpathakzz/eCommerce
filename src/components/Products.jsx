import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";
import { Grid, Button, Typography, Pagination, Paper } from "@mui/material";
import productsData from "../DB/products";
import { useFilter } from "../context/FilterContext";

const Home = () => {
  const { state } = useCart();
  const { sortBy, rating, priceRange } = useFilter().state;

  // Apply the filters to the products
  const filteredProducts = productsData.filter((product) => {
    // Apply sorting filter
    let sortCondition = true;
    if (sortBy === "price-low-to-high") {
      sortCondition = true;
    } else if (sortBy === "price-high-to-low") {
      sortCondition = true;
    } else if (sortBy === "rating") {
      sortCondition = true;
    }

    // Apply rating filter
    const ratingCondition = product.rating.rate >= rating;

    // Apply price range filter
    const priceRangeCondition =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return sortCondition && ratingCondition && priceRangeCondition;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const sortedProducts = [...currentProducts];
  // Sort the products based on the selected sorting option
  if (sortBy === "price-low-to-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high-to-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }
  // Change the page
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div style={{ flex: "1" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {sortedProducts.map((product) => (
              <Grid item key={product.id} style={{ marginBottom: "20px" }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "10px 0",
          backgroundColor: "#121212",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Home;
