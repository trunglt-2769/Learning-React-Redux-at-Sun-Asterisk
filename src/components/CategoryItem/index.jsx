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

function CategoryItem({ filter, category, active, level, handleClick }) {
  return (
    <div>
      {category && (
        <li className="category-item">
          <i className="fa fa-angle-right me-2"></i>
          <a
            href="#!"
            className={`category-item__item ${active ? "active" : ""}`}
            data-value={category.name}
            data-level={level}
            data-active={active}
            onClick={handleClick}
          >
            {category.name}
          </a>
          {active && category.children && (
            <ul>
              {category.children?.map((subCategory, index) => (
                <CategoryItem
                  key={index}
                  category={subCategory}
                  handleClick={handleClick}
                  active={
                    subCategory.name ===
                    filter[`hierarchicalCategories.lvl${level + 1}_like`]
                  }
                  level={level + 1}
                  filter={filter}
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
