import React from "react";
import "./Category.scss";

function Category() {
  return (
    <div className="category-item">
      <ul>
        <li>
          <a href="#!" className="active">
            <i className="fa fa-angle-right"></i> Category 1
          </a>
          <ul>
            <li>
              <a href="#!" className="active">
                <i className="fa fa-angle-right"></i> Sub Category 1
              </a>
            </li>
            <li>
              <a href="#!" className="">
                <i className="fa fa-angle-right"></i> Sub Category 2
              </a>
            </li>
            <li>
              <a href="#!" className="">
                <i className="fa fa-angle-right"></i> Sub Category 3
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!" className="">
            <i className="fa fa-angle-right"></i> Category 2
          </a>
        </li>
        <li>
          <a href="#!" className="">
            <i className="fa fa-angle-right"></i> Category 3
          </a>
        </li>
        <li>
          <a href="#!" className="">
            <i className="fa fa-angle-right"></i> Category 4
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Category;
