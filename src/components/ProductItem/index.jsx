import React from "react";
import "./ProductItem.scss";
import PropTypes from "prop-types";

ProductItem.propTypes = {
  product: PropTypes.object,
};

function ProductItem({ product }) {
  const RateProduct = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i className="fa fa-star" key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<i className="far fa-star" key={5 - i} />);
    }
    return stars;
  };

  return (
    <div className="col-12 col-md-6 col-xl-3 d-flex flex-column flex-lg-row align-items-stretch">
      <article className="product-item">
        <div className="product-item__img">
          <img src={product.image} alt="product-item" />
        </div>
        <div className="product-item__content">
          <div className="product-item__name">{product.name}</div>
          <div className="product-item__price">${product.price}</div>
          <div className="product-item__rating">
            <span className="rating">{RateProduct(product.rating)}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductItem;
