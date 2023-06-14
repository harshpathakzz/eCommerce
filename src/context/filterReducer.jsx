export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "CLEAR_FILTERS":
      return initialState;
    default:
      return state;
  }
};
