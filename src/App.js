import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import "./styles/index.scss";
import ProductList from "./components/ProductList";
import Loading from "./components/Loading";
import {
  loadProducts,
  incrementPage,
  sortProducts,
  setIsSorted,
} from "./redux/actions";
import { LIMIT } from "./common/config";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const [sort, setSort] = useState(
    query.get("sortBy") ? query.get("sortBy") : ""
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.product.isLoading);
  const isSorted = useSelector((state) => state.product.isSorted);
  const isSortingLoading = useSelector(
    (state) => state.product.isSortingLoading
  );
  const page = useSelector((state) => state.product.page);
  const products = useSelector((state) => state.product.products);
  const total = useSelector((state) => state.product.productCount);

  useEffect(() => {
    if (!isSorted) {
      dispatch(loadProducts({ page, limit: LIMIT, sort }));
    }
  }, [page]);

  useEffect(() => {
    if (isSorted) {
      dispatch(sortProducts({ page: 1, limit: LIMIT, sort }));
      dispatch(setIsSorted(false));
    }
  }, [isSorted]);

  {
    /* Below here is handle view onScroll */
  }
  window.onscroll = () => {
    if (
      products.length < total &&
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
    ) {
      if (!isLoading && !isSortingLoading) {
        dispatch(incrementPage());
      }
    }
  };

  const handleSelectSorting = (e) => {
    setSort(e.target.value);
  };

  const handleSortProducts = (e) => {
    e.preventDefault();
    dispatch(setIsSorted(true));
    if (sort) {
      history.push("/?sortBy=" + sort);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="form-group row">
          <label htmlFor="sorting" className="col-sm-1 col-form-label">
            Sort by
          </label>
          <div className="col-md-3">
            <div className="product-sort">
              <select
                defaultValue={sort}
                onChange={(e) => handleSelectSorting(e)}
                className="form-control"
              >
                <option value="">Default</option>
                <option value="id">Id</option>
                <option value="size">Size</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <button
              disabled={isSortingLoading}
              onClick={(e) => handleSortProducts(e)}
              className="btn btn-block btn-primary"
            >
              Sort
            </button>
          </div>
        </div>
        {isSortingLoading && <Loading />}
        {products && !isSortingLoading && <ProductList products={products} />}
        {isLoading && <Loading />}
        {!isLoading && products.length === total && (
          <div className="text-center">
            <p className="lead text-muted">~ end of catalogue ~</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
