import React from "react";
import "./CategoryItem.scss";
import PropTypes from "prop-types";

CategoryItem.propTypes = {
  category: PropTypes.object,
  active: PropTypes.bool,
  level: PropTypes.number,
  handleClick: PropTypes.func,
  filter: PropTypes.object,
};

function CategoryItem(props) {
  return (
    <div>
      {props.category && (
        <li className="category-item">
          <i className="fa fa-angle-right me-2"></i>
          <a
            href="#!"
            className={`category-item__item ${props.active ? "active" : ""}`}
            data-value={props.category.name}
            data-level={props.level}
            data-active={props.active}
            onClick={props.handleClick}
          >
            {props.category.name}
          </a>
          {props.active && props.category.children && (
            <ul>
              {props.category.children?.map((subCategory, index) => (
                <CategoryItem
                  key={index}
                  category={subCategory}
                  handleClick={props.handleClick}
                  active={
                    subCategory.name ===
                    props.filters[
                      `hierarchicalCategories.lvl${props.level + 1}_like`
                    ]
                  }
                  level={props.level + 1}
                  filters={props.filters}
                />
              ))}
            </ul>
          )}
        </li>
      )}
    </div>
  );
}

export default CategoryItem;
