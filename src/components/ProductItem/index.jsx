import React from "react";
import "./ProductItem.scss";

function ProductItem(props) {
  return (
    <article className="product-item">
      <div className="product-item__img">
        <img
          src="https://cdn-demo.algolia.com/bestbuy-0118/5588602_sb.jpg"
          alt="product-item"
        />
      </div>
      <div className="product-item__content">
        <div className="product-item__name">
          Dell - Inspiron 15.6" Touch-Screen Laptop - Intel Core i5 - 6GB Memory
          - 1TB Hard Drive - Black
        </div>
        <div className="product-item__type"></div>
        <div className="product-item__price">$499.99</div>
        <div className="product-item__rating">
          <span className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductItem;
