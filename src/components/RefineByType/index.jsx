import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RefineByType.scss";
import CheckBoxList from "../CheckBoxList/index.jsx";
import { changeType } from "../../pages/Products/filters.slice";

function RefineByType(props) {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);
  const { type } = useSelector((state) => state.categories);
  const handleFilterType = (data) => {
    dispatch(changeType({ type: data }));
  };

  return (
    <div className="refine-by-type">
      <CheckBoxList
        filter={filters.type}
        handleChangeOption={handleFilterType}
        name="brand"
        optionList={type}
      />
    </div>
  );
}

export default RefineByType;
