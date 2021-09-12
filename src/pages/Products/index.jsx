import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import "./ProductsPage.scss";
import Header from "../../components/layout/Header/index.jsx";
import Sidebar from "../../components/Sidebar/index.jsx";
import SortProducts from "../../components/SortProducts/index.jsx";
import ProductList from "../../components/ProductList/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import { getProducts } from "./products.slice";
import { setCategories } from "./categories.slice";
import productApi from "../../api/product.api";

function ProductsPage(props) {
  const dispatch = useDispatch();
  const [loadTime, setLoadTime] = useState(0);
  const { loading, products, pagination } = useSelector(
    (state) => state.products
  );
  const { filters, currentFilter } = useSelector((state) => state.filters);

  useEffect(() => {
    (async () => {
      try {
        const params = { ...filters };
        delete params._page;
        delete params._limit;
        const response = await productApi.getProducts({ params });
        dispatch(setCategories({ data: response.data, currentFilter }));
      } catch (error) {
        console.log(error.message);
      }
    })();

    (async () => {
      try {
        const startAt = new Date().getTime();
        const params = filters;
        const data = await dispatch(getProducts({ params }));
        setLoadTime(new Date().getTime() - startAt);
        // phải sử dụng unwrapResult mới catch được error
        unwrapResult(data); // sử dụng unwrapResult để chỉ lấy payload trả về
        // setProducts(res.data);
      } catch (error) {
        console.log(error.message);
      }
    })(); // eslint-disable-next-line
  }, [dispatch, filters]);

  return (
    <div>
      <Header />
      <section className="products__main">
        <div className="container-fluid">
          <Sidebar />
          <div className="products__content">
            <div>
              <SortProducts
                totalResults={pagination._totalProducts}
                loadTime={loadTime}
              />
              {loading ? (
                <p className="text-center pt-5 mt-5">loading...</p>
              ) : !products?.length ? (
                <p className="text-center pt-5 mt-5">Nothing here</p>
              ) : (
                <div>
                  <ProductList products={products} />
                  <Pagination pagination={pagination} />
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
