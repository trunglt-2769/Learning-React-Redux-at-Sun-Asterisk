import React from "react";
import { useDispatch } from "react-redux";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import { changePage } from "../../pages/Products/filters.slice";

function Pagination(props) {
  const dispatch = useDispatch();
  const { pagination } = props;
  const totalPage = Math.ceil(pagination._totalProducts / pagination._limit);

  const handlePaginaion = (e) => {
    dispatch(changePage({ page: e.selected + 1 }));
  };

  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={totalPage}
      marginPagesDisplayed={3}
      pageRangeDisplayed={4}
      onPageChange={handlePaginaion}
      containerClassName={"pagination justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      forcePage={pagination._page && pagination._page - 1}
    />
  );
}

export default Pagination;
