import React, { useReducer, useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductContext from "./product-context";
import { initState, productReducer } from "./product-reducer";
import {
  getProductRequest,
  getProductSuccess,
  getProductError,
  changeCategory,
  changeType,
  changeBrand,
  changeRating,
  changePrice,
  sortProducts,
  searchProducts,
  changePage,
  clearFilter,
} from "./product-actions";
import { extractData } from "../utils/extractData";
const ProductState = (props) => {
  const baseUrl = "http://localhost:5000/api";
  const typingTimeoutRef = useRef(null); //Debounce searching
  const [state, productDispatch] = useReducer(productReducer, initState);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [loadTime, setLoadTime] = useState(0);
  console.log("state.filter ", state.filter);
  useEffect(() => {
    const getProducts = async (params) => {
      productDispatch(getProductRequest());
      const startAt = new Date().getTime();

      try {
        await axios
          .get(`${baseUrl}/products`, {
            params,
          })
          .then((res) => {
            const data = res.data;
            setLoadTime(new Date().getTime() - startAt);
            productDispatch(getProductSuccess(data));
          });
      } catch (error) {
        productDispatch(getProductError(error));
      }
    };
    getProducts(state.filter);

    const getCategories = async (params) => {
      try {
        await axios
          .get(`${baseUrl}/products`, {
            params,
          })
          .then((res) => {
            const data = res.data;

            if (currentFilter !== "category")
              setCategories(extractData("category", data));
            if (currentFilter !== "type") setTypes(extractData("type", data));
            if (currentFilter !== "brand")
              setBrands(extractData("brand", data));
          });
      } catch (error) {
        console.log(error);
      }
    };

    const categoriesFilters = { ...state.filter };
    delete categoriesFilters._page;
    delete categoriesFilters._limit;
    getCategories(categoriesFilters);
    // eslint-disable-next-line
  }, [state.filter]);

  const handlePaginaion = (data) => {
    productDispatch(changePage(data));
  };

  const handleSortPrice = (order) => {
    let filter;
    if (order !== "default") {
      filter = { ...state.filter, _page: 1, _sort: "price", _order: order };
    } else {
      filter = { ...state.filter };
      filter._page = 1;
      if (filter._sort) delete filter._sort;
      if (filter._order) delete filter._order;
    }
    productDispatch(sortProducts(filter));
  };

  const handleSearch = (keyword) => {
    typingTimeoutRef.current && clearTimeout(typingTimeoutRef.current);

    //Debounce searching
    typingTimeoutRef.current = setTimeout(() => {
      productDispatch(searchProducts(keyword));
    }, 500);
  };

  const handleClearFilter = () => {
    productDispatch(clearFilter(initState.filter));
    setCurrentFilter(null);
  };

  const handleClickCategories = (data) => {
    productDispatch(changeCategory(data));
    setCurrentFilter("category");
  };

  const handleFilterBrand = (brand) => {
    productDispatch(changeBrand(brand));
    setCurrentFilter("brand");
  };

  const handleFilterType = (type) => {
    productDispatch(changeType(type));
    setCurrentFilter("type");
  };

  const handleFilterRating = (data) => {
    productDispatch(changeRating(data));
  };

  const handleFilterPrice = (data) => {
    productDispatch(changePrice(data));
  };

  return (
    <ProductContext.Provider
      value={{
        loading: state.loading,
        products: state.products,
        pagination: state.pagination,
        filter: state.filter,
        isClearFilter: state.isClearFilter,
        loadTime,
        brands,
        types,
        categories,
        handlePaginaion: (data) => handlePaginaion(data),
        handleSortPrice: (data) => handleSortPrice(data),
        handleSearch: (data) => handleSearch(data),
        handleClearFilter: () => handleClearFilter(),
        handleClickCategories: (data) => handleClickCategories(data),
        handleFilterBrand: (data) => handleFilterBrand(data),
        handleFilterType: (data) => handleFilterType(data),
        handleFilterRating: (data) => handleFilterRating(data),
        handleFilterPrice: (data) => handleFilterPrice(data),
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
