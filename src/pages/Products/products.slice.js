import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { payLoadCreater } from "../../utils/helper";
import productApi from "../../api/product.api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  payLoadCreater(productApi.getProducts)
);

const products = createSlice({
  name: "products", // prefix for create action type
  initialState: {
    products: [],
    pagination: {},
    loading: false,
    error: "",
  },
  // sử dụng extraReducers khi sử dụng createAsyncThunk, ...
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.products;
      state.pagination = action.payload.data.pagination;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const productsReducer = products.reducer;
export default productsReducer;
