import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./RefineByPrices.scss";
import { changePrice } from "../../pages/Products/filters.slice";

export const LIST_PRICE_RANGE = [
  { lte: 1 },
  { gte: 1, lte: 80 },
  { gte: 80, lte: 160 },
  { gte: 160, lte: 240 },
  { gte: 240, lte: 1820 },
  { gte: 1820, lte: 3400 },
  { gte: 3400, lte: 4980 },
  { gte: 4980 },
];

const RefineByPrices = (props) => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);
  const priceInput_gte = useRef();
  const priceInput_lte = useRef();

  const handleClickPrice = (e) => {
    const priceRange = e.currentTarget.dataset;
    if (priceRange.gte || priceRange.lte) {
      if (
        priceRange.lte !== filters.price_lte ||
        priceRange.gte !== filters.price_gte
      ) {
        dispatch(
          changePrice({
            price_gte: priceRange.gte,
            price_lte: priceRange.lte,
          })
        );
      } else {
        dispatch(changePrice({}));
      }
    }
  };

  const handleSubmitPrice = (e) => {
    e.preventDefault();

    dispatch(
      changePrice({
        price_gte: priceInput_gte.current.value,
        price_lte: priceInput_lte.current.value,
      })
    );
  };

  return (
    <div className="refine-by-price">
      <ul>
        {filters.price_gte && filters.price_lte ? (
          <li>
            <a
              href="#!"
              data-gte={filters.price_gte}
              data-lte={filters.price_lte}
              onClick={handleClickPrice}
            >
              ${filters.price_gte} - ${filters.price_lte}
            </a>
          </li>
        ) : filters.price_gte ? (
          <li>
            <a
              href="#!"
              data-gte={filters.price_gte}
              data-lte={filters.price_lte}
              onClick={handleClickPrice}
            >
              ≥ ${filters.price_gte}
            </a>
          </li>
        ) : filters.price_lte ? (
          <li>
            <a
              href="#!"
              data-gte={filters.price_gte}
              data-lte={filters.price_lte}
              onClick={handleClickPrice}
            >
              ≤ ${filters.price_lte}
            </a>
          </li>
        ) : (
          LIST_PRICE_RANGE.map((priceRange, index) => (
            <li key={index}>
              <a
                href="#!"
                data-gte={priceRange.gte}
                data-lte={priceRange.lte}
                onClick={handleClickPrice}
              >
                {priceRange.gte && priceRange.lte
                  ? `$${priceRange.gte} - ${priceRange.lte}`
                  : priceRange.gte
                  ? `≥ ${priceRange.gte}`
                  : `≤ ${priceRange.lte}`}
              </a>
            </li>
          ))
        )}
      </ul>
      <form>
        <label>
          $
          <input
            type="number"
            min={0}
            defaultValue={filters.price_gte}
            ref={priceInput_gte}
          ></input>
        </label>
        <span className="mx-2">to</span>
        <label>
          $
          <input
            type="number"
            min={0}
            defaultValue={filters.price_lte}
            ref={priceInput_lte}
          ></input>
        </label>
        <button type="submit" onClick={handleSubmitPrice}>
          Go
        </button>
      </form>
    </div>
  );
};

export default RefineByPrices;
