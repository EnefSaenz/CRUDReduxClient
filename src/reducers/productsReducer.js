import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  SET_EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_SUCCESS,
} from "../types";

// Each reducer has its own state
const initialState = {
  products: [],
  error: null,
  loading: false,
  producttodelete: null,
  producttoedit: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
    case GET_PRODUCTS:
    case EDIT_PRODUCT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_PRODUCT_ERROR:
    case GET_PRODUCTS_ERROR:
    case DELETE_PRODUCT_ERROR:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
        error: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        producttodelete: action.payload,
        error: null,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.producttodelete
        ),
        producttodelete: null,
        error: null,
      };
    case SET_EDIT_PRODUCT:
      return {
        ...state,
        producttoedit: action.payload,
        error: null,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        producttoedit: null,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default productsReducer;
