import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.scss";
import ClearFilterBtn from "../ClearFilterBtn/index.jsx";
import Categories from "../Categories";
import RefineByType from "../RefineByType/index.jsx";
import RefineByBrand from "../RefineByBrand/index.jsx";
import RefineByRatings from "../RefineByRatings/index.jsx";
import RefineByPrices from "../RefineByPrices/index.jsx";

function Sidebar() {
  const { isClearFilter } = useSelector((state) => state.filters);

  return (
    <div className="category">
      {!isClearFilter && <ClearFilterBtn />}
      <section className="category__result">
        <h4 className="category__title">Show results for</h4>
        <Categories />
      </section>
      <hr></hr>
      <section className="category__refine">
        <h4 className="category__title">Refine by</h4>
        <h5 className="category__title-inner">Type</h5>
        <RefineByType />
        <h5 className="category__title-inner">Brand</h5>
        <RefineByBrand />
        <h5 className="category__title-inner">Ratings</h5>
        <RefineByRatings />
        <h5 className="category__title-inner">Prices</h5>
        <RefineByPrices />
      </section>
      <hr></hr>
      <div className="category__text">Data courtesy of Best Buy</div>
    </div>
  );
}

export default Sidebar;
