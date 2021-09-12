import React, { useState, useEffect } from "react";
import "./CheckBoxList.scss";
import PropTypes from "prop-types";

CheckBoxList.propTypes = {
  optionList: PropTypes.array,
  handleChangeOption: PropTypes.func,
  filter: PropTypes.object,
};

function CheckBoxList(props) {
  const { filter, optionList, handleChangeOption } = props;
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
      {props.hasSearch && (
        <form>
          <button>
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            placeholder="Search for other..."
            id={props.id}
            onKeyUp={handleCheckBox}
          ></input>
        </form>
      )}
      <ul className="checkbox-list__list">
        {optionList?.map((option, index) => (
          <li
            key={index}
            className={filter && filter.includes(option.name) ? "active" : ""}
          >
            <input
              type="checkbox"
              id={index + option.name}
              value={option.name}
              checked={Boolean(filter && filter.includes(option.name))}
              onChange={handleCheckBox}
            />
            <label htmlFor={index + option.name}>
              {option.name} <span>({option.qty})</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckBoxList;
