import React from "react";

function RefineByType(props) {
  return (
    <div>
      <ul>
        <li className="active">
          <input type="checkbox" defaultChecked={true} />
          <label>
            <a href="#!">
              Trend cases <span>(457)</span>
            </a>
          </label>
        </li>
        <li>
          <input type="checkbox" />
          <label>
            <a href="#!">
              Ult protection cases <span>(393)</span>
            </a>
          </label>
        </li>
        <li>
          <input type="checkbox" />
          <label>
            <a href="#!">
              Ink cartridges <span>(249)</span>
            </a>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default RefineByType;
