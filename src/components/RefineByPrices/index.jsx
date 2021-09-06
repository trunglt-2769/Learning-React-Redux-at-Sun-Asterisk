import React from "react";
import "./RefineByPrices.scss";

function RefineByPrices(props) {
  return (
    <div>
      <ul>
        <li className="active">
          <a href="#!">≤1</a>
        </li>
        <li>
          <a href="#!">$1 - 80</a>
        </li>
        <li>
          <a href="#!">$80 - 160</a>
        </li>
        <li>
          <a href="#!">≥ $160</a>
        </li>
      </ul>
      <form>
        <label>
          <span>$ </span>
          <input type="number" />
        </label>
        <span className="mx-2">to</span>
        <label>
          <span>$ </span>
          <input type="number" />
        </label>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default RefineByPrices;
