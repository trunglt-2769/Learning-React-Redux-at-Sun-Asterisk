import React from "react";
import "./Sidebar.scss";
import ClearFilterBtn from "../UI/Buttons/ClearFilterBtn";
import Category from "../Category/index.jsx";
import RefineByType from "../RefineByType/index.jsx";
import RefineByBrand from "../RefineByBrand/index.jsx";
import RefineByRatings from "../RefineByRatings/index.jsx";
import RefineByPrices from "../RefineByPrices/index.jsx";

function Sidebar() {
  return (
    <div className="category">
      <ClearFilterBtn className="pt-5">
        <button>
          <i className="fa fa-eraser me-2"></i>Clear all filters
        </button>
      </ClearFilterBtn>

      <div className="category__result">
        <p className="category__title">Show results for</p>
        <Category />
      </div>
      <hr></hr>
      <div className="category__refine">
        <p className="category__title">Refine by</p>
        <p className="category__title-inner">Type</p>
        <RefineByType />
        <p className="category__title-inner">Brand</p>
        <RefineByBrand />
        <p className="category__title-inner">Ratings</p>
        <RefineByRatings />
        <p className="category__title-inner">Prices</p>
        <RefineByPrices />
      </div>
      <hr></hr>
      <div className="category__text">Data courtesy of Best Buy</div>
    </div>
  );
}

export default Sidebar;
