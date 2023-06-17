import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Slider,
  ListItemButton,
  Toolbar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import { useFilter } from "../context/FilterContext";

const Filters = () => {
  const { state, dispatch } = useFilter();
  const { sortBy, rating, priceRange } = state;

  const handleSortChange = (event) => {
    dispatch({ type: "SET_SORT_BY", payload: event.target.value });
  };

  const handleRatingChange = (event, newValue) => {
    dispatch({ type: "SET_RATING", payload: newValue });
  };

  const handlePriceChange = (event, newValue) => {
    dispatch({ type: "SET_PRICE_RANGE", payload: newValue });
  };

  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <>
      <Toolbar />
      <Typography
        variant="h5"
        sx={{ marginBottom: 2, marginLeft: 2, fontWeight: "bold" }}
      >
        Filter by:
      </Typography>
      <Divider />
      <List style={{ paddingLeft: 16, paddingRight: 16 }}>
        <ListItem disablePadding>
          <ListItemText primary="Sort By:" />
        </ListItem>
        <ListItemButton
          disablePadding
          sx={{ flexDirection: "row", width: "100%" }}
          onClick={() =>
            handleSortChange({ target: { value: "price-low-to-high" } })
          }
        >
          <Radio
            checked={sortBy === "price-low-to-high"}
            value="price-low-to-high"
          />
          <ListItemText primary="Price: Low to High" />
        </ListItemButton>
        <ListItemButton
          disablePadding
          sx={{ flexDirection: "row", width: "100%" }}
          onClick={() =>
            handleSortChange({ target: { value: "price-high-to-low" } })
          }
        >
          <Radio
            checked={sortBy === "price-high-to-low"}
            value="price-high-to-low"
          />
          <ListItemText primary="Price: High to Low" />
        </ListItemButton>
        <ListItemButton
          disablePadding
          sx={{ flexDirection: "row", width: "100%" }}
          onClick={() => handleSortChange({ target: { value: "rating" } })}
        >
          <Radio checked={sortBy === "rating"} value="rating" />
          <ListItemText primary="Rating" />
        </ListItemButton>
      </List>

      <Divider />
      <List style={{ paddingLeft: 16, paddingRight: 16 }}>
        <ListItem disablePadding>
          <ListItemText primary="Rating" />
        </ListItem>
        <ListItemButton disablePadding>
          <Rating
            name="simple-controlled"
            value={rating}
            precision={0.5}
            onChange={handleRatingChange}
            icon={<StarIcon />}
            style={{ marginLeft: -12 }}
          />
        </ListItemButton>
      </List>
      <Divider />
      <List style={{ paddingLeft: 16, paddingRight: 16 }}>
        <ListItem disablePadding>
          <ListItemText primary="Price Range" />
        </ListItem>
        <ListItemButton disablePadding sx={{ flexDirection: "row" }}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <Slider
            min={10}
            max={1000}
            step={10}
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            style={{ marginLeft: -12, marginRight: -12 }}
          />
        </ListItemButton>
      </List>
      <Divider />
      <Button onClick={handleClearFilters} style={{ margin: 16 }}>
        Clear Filters
      </Button>
    </>
  );
};

export default Filters;
