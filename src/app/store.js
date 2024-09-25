import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
// import productsSlice from "../features/products/productsSlice";
// import productionsSlice from "../features/productions/productionsSlice";
import products from "../features/products/productsSlice";
import productions from "../features/productions/productionsSlice";
import { api } from "./services/api";
import { listenerMiddleware } from "../middleware/auth";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    products,
    productions,
    // productsSlice,
    // productionsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});
