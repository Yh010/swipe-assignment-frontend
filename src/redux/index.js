import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice";
import productsReducer from "./productsSlice"; // Import the products reducer

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productsReducer, // Add the products reducer to the root reducer
});

export default rootReducer;
