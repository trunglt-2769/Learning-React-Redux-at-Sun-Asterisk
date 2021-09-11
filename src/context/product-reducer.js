import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_BY_FILTER,
  CLEAR_FILTER,
} from "./product-actions-types";

export const initState = {
  loading: false,
  error: null,
  products: [],
  pagination: {},
  filter: { _page: 1, _limit: 16 },
  isClearFilter: true,
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
        pagination: action.pagination,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        products: [],
        pagination: {},
        error: action.products,
      };
    case GET_PRODUCT_BY_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...action.filter },
        isClearFilter: action.isClearFilter,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: action.filter,
        isClearFilter: action.isClearFilter,
      };
    default:
      return state;
  }
};
