import React from "react";
import "./ClearFilterBtn.scss";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../pages/Products/filters.slice";

function ClearFilterBtn(props) {
  const dispatch = useDispatch();

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <div className="clear-filter-btn">
      <button onClick={handleClearFilter}>
        <i className="fa fa-eraser me-2"></i>Clear all filters
      </button>
    </div>
  );
}

export default ClearFilterBtn;
