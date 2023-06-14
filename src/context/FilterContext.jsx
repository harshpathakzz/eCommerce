import React, { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./filterReducer";

// Create the filter context
export const FilterContext = createContext();

// Export a custom hook to access the filter context
export const useFilter = () => useContext(FilterContext);

// Initial state for the filters
const initialState = {
  sortBy: "price-low-to-high",
  rating: 0,
  priceRange: [0, 1000],
};

// Create the filter provider component
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
