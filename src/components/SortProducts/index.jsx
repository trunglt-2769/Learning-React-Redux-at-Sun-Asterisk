import React from "react";
import { useDispatch } from "react-redux";
import "./SortProducts.scss";
import { sortByPrice } from "../../pages/Products/filters.slice";
import PropTypes from "prop-types";

SortProducts.propTypes = {
  totalResults: PropTypes.number,
  loadTime: PropTypes.number,
};

function SortProducts({ totalResults, loadTime }) {
  const dispatch = useDispatch();

  const handleSortPrice = (e) => {
    const order = e.target.value;
    dispatch(sortByPrice({ order: order }));
  };

  return (
    <div className="products-header">
      <div className="products-header__left">
        {totalResults ? totalResults.toLocaleString("vi-VN") : "no"} results
        found in {loadTime}ms
      </div>
      <div className="products-header__right">
        <label>Sort by</label>
        <select onChange={handleSortPrice}>
          <option value="default" defaultValue={true}>
            Featured
          </option>
          <option value="asc">Price asc.</option>
          <option value="desc">Price desc.</option>
        </select>
      </div>
    </div>
  );
}

export default SortProducts;
