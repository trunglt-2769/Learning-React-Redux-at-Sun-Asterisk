import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RefineByBrand.scss";
import CheckBoxList from "../CheckBoxList/index.jsx";
import { changeBrand } from "../../pages/Products/filters.slice";

function RefineByBrand(props) {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);
  const { brand } = useSelector((state) => state.categories);

  const handleFilterBrand = (data) => {
    dispatch(changeBrand({ brand: data }));
  };
  return (
    <div className="refine-by-brand">
      <CheckBoxList
        hasSearch={true}
        filter={filters.brand}
        handleChangeOption={handleFilterBrand}
        name="brand"
        optionList={brand}
      />
    </div>
  );
}

export default RefineByBrand;
