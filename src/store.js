import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./pages/Products/products.slice";
import filtersReducer from "./pages/Products/filters.slice";
import categoriesReducer from "./pages/Products/categories.slice";

// import rootReducer from "./reducer";

const rootReducer = {
  products: productsReducer,
  filters: filtersReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  // custom middleware nếu gặp warning serialized error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
