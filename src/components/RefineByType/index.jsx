import React, { useContext } from "react";
import "./RefineByType.scss";
import ProductContext from "../../context/product-context";
import CheckBoxList from "../CheckBoxList/index.jsx";

function RefineByType(props) {
  const { types, filter, handleFilterType } = useContext(ProductContext);

  return (
    <div className="refine-by-type">
      <CheckBoxList
        filterArray={filter.type}
        handleChangeOption={handleFilterType}
        name="brand"
        optionList={types}
      />
    </div>
  );
}

export default RefineByType;
