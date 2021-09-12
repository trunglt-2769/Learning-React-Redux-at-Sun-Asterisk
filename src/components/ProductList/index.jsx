import React from "react";
import "./ProductList.scss";
import ProductItem from "../ProductItem/index.jsx";
import PropTypes from "prop-types";

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList(props) {
  const { products } = props;
  return (
    <div className="product-list">
      <div className="row">
        {products.map((product) => (
          <ProductItem product={product} key={product.objectID} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
