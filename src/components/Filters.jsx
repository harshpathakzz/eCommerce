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
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";

const Filters = () => {
  const [sortBy, setSortBy] = useState("price-low-to-high");
  const [rating, setRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <>
      <Toolbar />
      <Typography variant="h3">Filter by:</Typography>
      <Divider />
      <List style={{ paddingLeft: 16, paddingRight: 16 }}>
        <ListItem disablePadding>
          <ListItemText primary="Sort By:" />
        </ListItem>
        <ListItemButton disablePadding sx={{ flexDirection: "row" }}>
          <Radio
            checked={sortBy === "price-low-to-high"}
            onChange={handleSortChange}
            value="price-low-to-high"
          />
          <ListItemText primary="Price: Low to High" />
        </ListItemButton>
        <ListItemButton disablePadding sx={{ flexDirection: "row" }}>
          <Radio
            checked={sortBy === "price-high-to-low"}
            onChange={handleSortChange}
            value="price-high-to-low"
          />
          <ListItemText primary="Price: High to Low" />
        </ListItemButton>
        <ListItemButton disablePadding sx={{ flexDirection: "row" }}>
          <Radio
            checked={sortBy === "rating"}
            onChange={handleSortChange}
            value="rating"
          />
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
    </>
  );
};

export default Filters;
