import { createSlice } from "@reduxjs/toolkit";

const defaultFilters = { _page: 1, _limit: 16 };

const filters = createSlice({
  name: "filters", // prefix for create action type
  initialState: {
    filters: defaultFilters,
    isClearFilter: true,
    currentFilter: null,
    categories: [],
  },
  reducers: {
    sortByPrice: (state, action) => {
      state.filters._page = 1;
      if (action.payload.order !== "default") {
        state.filters._sort = "price";
        state.filters._order = action.payload.order;
      } else {
        delete state.filters._sort;
        delete state.filters._order;
      }
    },
    searchProducts: (state, action) => {
      state.filters._page = 1;
      state.filters.name_like = action.payload.name;
    },
    changePage: (state, action) => {
      state.filters._page = action.payload.page;
    },
    changeCategory: (state, action) => {
      state.filters._page = 1;
      state.filters["hierarchicalCategories.lvl0_like"] =
        action.payload.categoryLvl0;
      state.filters["hierarchicalCategories.lvl1_like"] =
        action.payload.categoryLvl1;
      state.filters["hierarchicalCategories.lvl2_like"] =
        action.payload.categoryLvl2;
      state.isClearFilter = false;
      state.currentFilter = "category";
    },
    changeType: (state, action) => {
      state.filters._page = 1;
      state.filters.type = action.payload.type;
      state.isClearFilter = false;
      state.currentFilter = "type";
    },
    changeBrand: (state, action) => {
      state.filters._page = 1;
      state.filters.brand = action.payload.brand;
      state.isClearFilter = false;
      state.currentFilter = "brand";
    },
    changeRating: (state, action) => {
      state.filters._page = 1;
      state.filters.rating_gte = action.payload.rating_gte;
      state.isClearFilter = false;
    },
    changePrice: (state, action) => {
      state.filters._page = 1;
      state.filters.price_gte = action.payload.price_gte;
      state.filters.price_lte = action.payload.price_lte;
      state.isClearFilter = false;
    },
    clearFilter: (state, action) => {
      state.filters = defaultFilters;
      state.isClearFilter = true;
      state.currentFilter = null;
    },
    setCategories: (state, action) => {
      state.categories = action.payload.data;
    },
  },
});

const { reducer, actions } = filters;
const filtersReducer = reducer;

export const {
  searchProducts,
  sortByPrice,
  changePage,
  changeCategory,
  changeType,
  changeBrand,
  changeRating,
  changePrice,
  clearFilter,
  setCategories,
} = actions;
export default filtersReducer;
