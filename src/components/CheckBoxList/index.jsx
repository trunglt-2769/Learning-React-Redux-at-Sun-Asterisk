import React, { useState, useEffect } from "react";
import "./CheckBoxList.scss";

import PropTypes from "prop-types";

CheckBoxList.propTypes = {
  optionList: PropTypes.array,
  handleChangeOption: PropTypes.func,
  filterArray: PropTypes.array,
  hasSearch: PropTypes.bool,
  id: PropTypes.string,
};

function CheckBoxList({
  filterArray,
  optionList,
  handleChangeOption,
  hasSearch,
  id,
}) {
  const [skipCount, setSkipCount] = useState(true);
  const [selected, setSelected] = useState([]);

  const handleCheckBox = (e) => {
    let newSelected = e.target.checked
      ? [...selected, e.target.value]
      : [...selected.filter((option) => option !== e.target.value)];
    setSelected(newSelected);
  };

  useEffect(() => {
    if (skipCount) setSkipCount(false);
    if (!skipCount) handleChangeOption(selected);
    // eslint-disable-next-line
  }, [selected]);

  return (
    <div className="checkbox-list">
      {hasSearch && (
        <form>
          <button>
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            placeholder="Search for other..."
            id={id}
            onKeyUp={handleCheckBox}
          ></input>
        </form>
      )}
      <ul className="checkbox-list__list">
        {optionList?.map((option, index) => (
          <li
            key={index}
            className={
              filterArray && filterArray.includes(option.name) ? "active" : ""
            }
          >
            <input
              type="checkbox"
              id={index + option.name}
              value={option.name}
              checked={Boolean(
                filterArray && filterArray.includes(option.name)
              )}
              onChange={handleCheckBox}
            />
            <label htmlFor={index + option.name}>
              {option.name} ({option.qty})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckBoxList;
