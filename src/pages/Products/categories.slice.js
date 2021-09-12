import { createSlice } from "@reduxjs/toolkit";
import { extractData } from "../../utils/helper";

const categories = createSlice({
  name: "categories", // prefix for create action type
  initialState: {
    categories: [],
    type: [],
    brand: [],
  },
  reducers: {
    setCategories: (state, action) => {
      if (action.payload.currentFilter !== "category")
        state.categories = extractData("category", action.payload.data);
      if (action.payload.currentFilter !== "type")
        state.type = extractData("type", action.payload.data);
      if (action.payload.currentFilter !== "brand")
        state.brand = extractData("brand", action.payload.data);
    },
  },
});
const { reducer, actions } = categories;
const categoriesReducer = reducer;
export const { setCategories } = actions;
export default categoriesReducer;
