import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../features/Cart";
import { loadingSlice } from "../features/Loader";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    loading: loadingSlice.reducer,
  },
});
