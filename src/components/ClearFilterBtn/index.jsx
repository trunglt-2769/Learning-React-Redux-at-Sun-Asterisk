import React, { useContext } from "react";
import "./ClearFilterBtn.scss";
import ProductContext from "../../context/product-context";

function ClearFilterBtn(props) {
  const { isClearFilter, handleClearFilter } = useContext(ProductContext);

  return (
    <>
      {isClearFilter ? (
        ""
      ) : (
        <div className="clear-filter-btn">
          <button onClick={handleClearFilter}>
            <i className="fa fa-eraser me-2"></i>Clear all filters
          </button>
        </div>
      )}
    </>
  );
}

export default ClearFilterBtn;
