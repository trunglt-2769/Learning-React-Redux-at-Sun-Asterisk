import React from "react";
import "./Pagination.scss";

function Pagination(props) {
  return (
    <div className="pagination-block">
      <nav aria-label="Product pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#!">
              1
            </a>
          </li>
          <li class="page-item" aria-current="page">
            <a class="page-link" href="#!">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#!">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#!">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
