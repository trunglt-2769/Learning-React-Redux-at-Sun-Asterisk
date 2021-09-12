import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../CategoryItem";
import "./Categories.scss";
import { changeCategory } from "../../pages/Products/filters.slice";

function Categories() {
  const { categories } = useSelector((state) => state.categories);
  const { filters } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  function getCategoryFilterData(filt, level) {
    let newCategory = {};
    for (let index = 0; index <= level; index++) {
      newCategory[`categoryLvl${index}`] =
        filt[`hierarchicalCategories.lvl${index}_like`];
    }
    return newCategory;
  }

  function handleClickCategory(event) {
    let data = event.target.dataset;
    let categoryData = getCategoryFilterData(filters, data.level);
    let categoriesItemSelector = document.querySelectorAll(
      "li.category-item__item"
    );
    if (data.level > 1 && data.active === "false") {
      categoriesItemSelector.forEach(
        (element) => (element.style.display = "none")
      );
    } else {
      categoriesItemSelector.forEach(
        (element) => (element.style.display = "block")
      );
    }
    categoryData[`categoryLvl${data.level}`] =
      data.active === "false" ? data.value : "";
    dispatch(changeCategory(categoryData));
  }

  return (
    <div className="Categories">
      <nav>
        <ul>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              handleClick={handleClickCategory}
              active={
                category.name === filters["hierarchicalCategories.lvl0_like"]
              }
              level={0}
              filters={filters}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Categories;
