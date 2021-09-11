import React, { useContext } from "react";
import "./RefineByBrand.scss";
import ProductContext from "../../context/product-context";
import CheckBoxList from "../CheckBoxList/index.jsx";

function RefineByBrand(props) {
  const { brands, filter, handleFilterBrand } = useContext(ProductContext);
  return (
    <div className="refine-by-brand">
      <CheckBoxList
        hasSearch={true}
        id={"brandSearch"}
        filterArray={filter.brand}
        handleChangeOption={handleFilterBrand}
        name="brand"
        optionList={brands}
      />
    </div>
  );
}

export default RefineByBrand;
