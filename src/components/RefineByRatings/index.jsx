import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RefineByRatings.scss";
import Rating from "../Rating";
import { changeRating } from "../../pages/Products/filters.slice";

function RefineByRatings(props) {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);

  const handleClickRating = (e) => {
    const rating_gte = parseInt(e.currentTarget.dataset.gte);
    dispatch(changeRating({ rating_gte: rating_gte }));
  };

  return (
    <div className="refine-by-ratings">
      <ul>
        {Array.from({ length: 4 }, (_, i) => (
          <li key={4 - i}>
            <a
              href="#!"
              className={4 - i === filters.rating_gte ? "active" : ""}
              data-gte={4 - i}
              data-active={4 - i === filters.rating_gte}
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
