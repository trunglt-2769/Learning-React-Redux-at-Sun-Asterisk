import React from "react";
import "./ClearFilterBtn.scss";

function ClearFilterBtn(props) {
  return <div className="clear-filter-btn">{props.children}</div>;
}

export default ClearFilterBtn;
