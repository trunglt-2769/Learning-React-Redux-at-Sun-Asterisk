import React, { useContext } from "react";
import "./ProductsPage.scss";
import Header from "../../layout/Header/index.jsx";
import Sidebar from "../../Sidebar/index.jsx";
import SortProducts from "../../SortProducts/index.jsx";
import ProductList from "../../ProductList/index.jsx";
import Pagination from "../../Pagination/index.jsx";
import ProductContext from "../../../context/product-context";

function ProductsPage(props) {
  const { loading, products } = useContext(ProductContext);

  return (
    <div>
      <Header />
      <section className="products__main">
        <div className="container-fluid">
          <Sidebar />
          <div className="products__content">
            <div>
              <SortProducts />
              {loading ? (
                <p className="text-center pt-5 mt-5">loading...</p>
              ) : !products.length ? (
                <p className="text-center pt-5 mt-5">Nothing here</p>
              ) : (
                <div>
                  <ProductList />
                  <Pagination />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
