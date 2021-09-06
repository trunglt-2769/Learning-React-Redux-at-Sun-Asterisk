import React from "react";
import "./ProductsPage.scss";
import Header from "../../layout/Header/index.jsx";
import Sidebar from "../../Sidebar/index.jsx";
import SortProducts from "../../SortProducts/index.jsx";
import ProductList from "../../ProductList/index.jsx";
import Pagination from "../../Pagination/index.jsx";

function ProductsPage(props) {
  return (
    <div>
      <Header />
      <section className="products__main">
        <div className="container-fluid">
          <Sidebar />
          <div className="products__content">
            <SortProducts />
            <ProductList />
            <Pagination />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
