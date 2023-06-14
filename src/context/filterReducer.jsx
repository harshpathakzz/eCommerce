export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBy: "price-low-to-high",
        rating: 0,
        priceRange: [0, 1000],
      };
    default:
      return state;
  }
};
