import {
  SET_LOADING,
  SET_ERROR,
  SET_PRODUCTS,
  SET_PRODUCT_SORTED,
  SET_IS_SORTING_LOADING,
  SET_TOTAL_PRODUCTS,
  SET_IS_SORTED,
  SET_PREVIOUS_ADS_ID,
  INCREMENT_PAGE,
} from "./types";
import api from "../../common/api";

const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

const setError = (value) => ({
  type: SET_ERROR,
  payload: value,
});

const setProducts = (value) => ({
  type: SET_PRODUCTS,
  payload: value,
});

const setProductSorted = (value) => ({
  type: SET_PRODUCT_SORTED,
  payload: value,
});

const setIsSortingLoading = (value) => ({
  type: SET_IS_SORTING_LOADING,
  payload: value,
});

const setTotalProducts = (value) => ({
  type: SET_TOTAL_PRODUCTS,
  payload: value,
});

export const setIsSorted = (value) => ({
  type: SET_IS_SORTED,
  payload: value,
});

export const setPreviousAdsId = (value) => ({
  type: SET_PREVIOUS_ADS_ID,
  payload: value,
});

export const incrementPage = () => ({
  type: INCREMENT_PAGE,
});

export const loadProducts = (params) => (dispatch) => {
  dispatch(setLoading(true));
  const page = params.page;
  const limit = params.limit;
  const sort = params.sort;
  let url = "api/products?_page=" + page + "&_limit=" + limit;
  if (sort) {
    url += "&_sort=" + sort;
  }
  api({
    method: "GET",
    url,
    responseType: "json",
  })
    .then((res) => {
      dispatch(setTotalProducts(parseInt(res.headers["x-total-count"])));
      dispatch(setError(""));
      dispatch(setProducts(res.data));
    })
    .catch((err) => dispatch(err.response.data))
    .finally((_) => dispatch(setLoading(false)));
};

export const sortProducts = (params) => (dispatch) => {
  dispatch(setIsSortingLoading(true));
  const page = params.page;
  const limit = params.limit;
  const sort = params.sort;
  let url = "api/products?_page=" + page + "&_limit" + limit;
  if (sort) {
    url += "&_sort=" + sort;
  }
  api({
    method: "GET",
    url,
    responseType: "json",
  })
    .then((res) => {
      dispatch(setTotalProducts(parseInt(res.headers["x-total-count"])));
      dispatch(setError(""));
      dispatch(setProductSorted(res.data));
    })
    .catch((err) => dispatch(err.response.data))
    .finally((_) => dispatch(setIsSortingLoading(false)));
};
