{
  /* Declare state action that handle with redux */
}

import {
  INCREMENT_PAGE,
  SET_ERROR,
  SET_IS_SORTED,
  SET_IS_SORTING_LOADING,
  SET_LOADING,
  SET_PREVIOUS_ADS_ID,
  SET_PRODUCT_SORTED,
  SET_PRODUCTS,
  SET_TOTAL_PRODUCTS,
} from "../actions";

const initialState = {
  error: "",
  isLoading: null,
  isSorted: false,
  isSortingLoading: false,
  page: 1,
  previousAdsId: 0,
  productCount: 0,
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_IS_SORTED:
      return {
        ...state,
        isSorted: action.payload,
        page: 1,
      };
    case SET_IS_SORTING_LOADING:
      return {
        ...state,
        isSortingLoading: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_PREVIOUS_ADS_ID:
      return {
        ...state,
        previousAdsId: action.payload,
      };
    case SET_PRODUCT_SORTED:
      return {
        ...state,
        products: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case SET_TOTAL_PRODUCTS:
      return {
        ...state,
        productCount: action.payload,
      };
    default:
      return state;
  }
}
