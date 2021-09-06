import React from "react";
import "./SortProducts.scss";

function SortProducts(props) {
  return (
    <div className="products-header">
      <div className="products-header__left">4.306 results found in 3ms</div>
      <div className="products-header__right">
        <label>Sort by</label>
        <select>
          <option value="default" selected>
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
