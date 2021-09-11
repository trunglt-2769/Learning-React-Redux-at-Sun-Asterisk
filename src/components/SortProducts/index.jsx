import React, { useContext } from "react";
import "./SortProducts.scss";
import ProductContext from "../../context/product-context";

function SortProducts(props) {
  const { loadTime, pagination, handleSortPrice } = useContext(ProductContext);
  const totalResults = pagination._totalProducts;

  const onSortPriceChange = (e) => {
    const order = e.target.value;
    handleSortPrice(order);
  };

  return (
    <div className="products-header">
      <div className="products-header__left">
        {totalResults ? totalResults.toLocaleString("vi-VN") : ""} results found
        in {loadTime || 0}ms
      </div>
      <div className="products-header__right">
        <label>Sort by</label>
        <select onChange={onSortPriceChange}>
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
