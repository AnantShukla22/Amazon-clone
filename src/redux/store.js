import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

// configuring the store and exporting it, it is used to give to the Provider in the app.js to perform the reducer action globally 
export const store = configureStore({
  reducer: {
    // here there is only one reducer ie only one slice
    basket: basketReducer,
  },
});
