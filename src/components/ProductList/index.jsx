import React, { useContext } from "react";
import "./ProductList.scss";
import ProductItem from "../ProductItem/index.jsx";
import ProductContext from "../../context/product-context";

const ProductList = (props) => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-list">
      <div className="row">
        {products.map((product) => (
          <ProductItem product={product} key={product.objectID} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
