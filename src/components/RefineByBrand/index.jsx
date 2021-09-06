import React from "react";
import "./RefineByBrand.scss";

function RefineByBrand(props) {
  return (
    <div class="refine-by-brand">
      <form>
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
        <input type="text" placeholder="Search for other..."></input>
      </form>
      <ul>
        <li className="active">
          <input type="checkbox" defaultChecked={true} />
          <label>
            <a href="#!">
              OtterBox <span>(132)</span>
            </a>
          </label>
        </li>
        <li>
          <input type="checkbox" />
          <label>
            <a href="#!">
              Speck <span>(131)</span>
            </a>
          </label>
        </li>
        <li>
          <input type="checkbox" />
          <label>
            <a href="#!">
              Tech21 <span>(67)</span>
            </a>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default RefineByBrand;
