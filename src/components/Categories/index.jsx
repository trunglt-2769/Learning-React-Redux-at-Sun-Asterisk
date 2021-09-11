import React, { useContext } from "react";
import ProductContext from "../../context/product-context";
import CategoryItem from "../CategoryItem";
import "./Categories.scss";

function Categories() {
  const { categories, filter, handleClickCategories } =
    useContext(ProductContext);

  function getCategoryFilterData(filt, level) {
    let newCategory = {};
    for (let index = 0; index <= level; index++) {
      newCategory[`categoryLvl${index}`] =
        filt[`hierarchicalCategories.lvl${index}_like`];
    }
    return newCategory;
  }

  function handleChangeCategory(event) {
    let data = event.target.dataset;
    let categoryData = getCategoryFilterData(filter, data.level);
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
    handleClickCategories(categoryData);
  }

  return (
    <div className="Categories">
      <nav>
        <ul>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              handleClick={handleChangeCategory}
              active={
                category.name === filter["hierarchicalCategories.lvl0_like"]
              }
              level={0}
              filter={filter}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Categories;
