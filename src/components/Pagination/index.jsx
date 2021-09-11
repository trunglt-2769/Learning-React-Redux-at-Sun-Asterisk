import React, { useContext, useEffect } from "react";
import "./Pagination.scss";
import ProductContext from "../../context/product-context";
import ReactPaginate from "react-paginate";

function Pagination() {
  const { pagination, handlePaginaion } = useContext(ProductContext);
  const totalPage = Math.ceil(pagination._totalProducts / pagination._limit);

  useEffect(() => {
    console.log(pagination);
  }, [pagination]);

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
