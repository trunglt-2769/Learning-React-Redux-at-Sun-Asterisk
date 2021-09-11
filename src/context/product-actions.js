import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_BY_FILTER,
  CLEAR_FILTER,
} from "./product-actions-types";

export const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

export const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    products: data.products,
    pagination: data.pagination,
  };
};

export const getProductError = (data) => {
  return {
    type: GET_PRODUCT_ERROR,
    products: data,
    pagination: data,
  };
};

export const changeCategory = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: {
      _page: 1,
      "hierarchicalCategories.lvl0_like": data.categoryLvl0,
      "hierarchicalCategories.lvl1_like": data.categoryLvl1,
      "hierarchicalCategories.lvl2_like": data.categoryLvl2,
    },
    isClearFilter: false,
  };
};

export const changeType = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: { type: data },
    isClearFilter: false,
  };
};
export const changeBrand = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: { brand: data },
    isClearFilter: false,
  };
};
export const changeRating = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: { rating_gte: data },
    isClearFilter: false,
  };
};
export const changePrice = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: {
      price_gte: data.price_gte,
      price_lte: data.price_lte,
    },
    isClearFilter: false,
  };
};
export const sortProducts = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: data,
  };
};
export const searchProducts = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: { _page: 1, name_like: data },
    isClearFilter: false,
  };
};
export const changePage = (data) => {
  return {
    type: GET_PRODUCT_BY_FILTER,
    filter: { _page: data.selected + 1 },
  };
};

export const clearFilter = (defaultFilter) => {
  return {
    type: CLEAR_FILTER,
    filter: defaultFilter,
    isClearFilter: true,
  };
};
