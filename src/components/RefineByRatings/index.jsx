import React, { useContext } from "react";
import "./RefineByRatings.scss";
import Rating from "../Rating";
import ProductContext from "../../context/product-context";

function RefineByRatings(props) {
  const { handleFilterRating, filter } = useContext(ProductContext);

  const handleClickRating = (e) => {
    const rating_gte = parseInt(e.currentTarget.dataset.gte);
    handleFilterRating(rating_gte);
  };

  return (
    <div className="refine-by-ratings">
      <ul>
        {Array.from({ length: 4 }, (_, i) => (
          <li key={4 - i}>
            <a
              href="#!"
              className={4 - i === filter.rating_gte ? "active" : ""}
              data-gte={4 - i}
              data-active={4 - i === filter.rating_gte}
              onClick={handleClickRating}
            >
              <Rating rate={4 - i} />
              <span> & Up </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RefineByRatings;
