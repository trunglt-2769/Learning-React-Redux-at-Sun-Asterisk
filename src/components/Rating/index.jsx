import React from "react";
import "./Rating.scss";
import PropTypes from "prop-types";

Rating.propTypes = {
  rate: PropTypes.number,
};

function Rating(props) {
  return (
    <span className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={i < props.rate ? "fa fa-star" : "far fa-star"}
        ></i>
      ))}
    </span>
  );
}

export default Rating;
