import * as React from "react";
import { useState, useEffect } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Slider,
  ListItemButton,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SortIcon from "@mui/icons-material/Sort";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";

const Filters = () => {
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemText primary="Sort By:" />
        </ListItem>
        <ListItemButton disablePadding>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <Select>
            <MenuItem value="price-low-to-high">Price: Low to High</MenuItem>
            <MenuItem value="price-high-to-low">Price: High to Low</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemText primary="Rating" />
        </ListItem>
        <ListItemButton disablePadding>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <Slider min={0} max={5} step={0.5} valueLabelDisplay="auto" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemText primary="Price Range" />
        </ListItem>
        <ListItemButton disablePadding>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <Slider min={0} max={1000} step={10} valueLabelDisplay="auto" />
        </ListItemButton>
      </List>
    </>
  );
};

export default Filters;
