import React from "react";
import "./ProductList.scss";
import ProductItem from "../ProductItem/index.jsx";

function ProductList(props) {
  return (
    <div className="product-list row">
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <ProductItem />
      </div>
    </div>
  );
}

export default ProductList;
