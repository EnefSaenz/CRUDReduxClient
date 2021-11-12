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
  SET_EDIT_PRODUCT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_SUCCESS,
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

// For creating new products
export function addProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      // Inserting on API
      await axiosClient.post("/products", product);

      // If there are not errors
      dispatch(setAddProductSuccess(product));

      // Display an alert
      Swal.fire({
        title: "Enhorabuena!",
        text: "El producto se agregó exitosamente",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      // If errors
      dispatch(setAddProductError(true));

      // Display an alert
      Swal.fire({
        title: "Vaya!",
        text: "Ha ocurrido un error inesperado, intente de nuevo más tarde.",
        icon: "error",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
}

const addProduct = () => ({ type: ADD_PRODUCT });

const setAddProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const setAddProductError = (status) => ({
  type: ADD_PRODUCT_ERROR,
  payload: status,
});

// For getting products
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      // Getting from API
      const response = await axiosClient.get("/products");

      // If there are not errors
      dispatch(setGetProductsSuccess(response.data));
    } catch (error) {
      // If errors
      dispatch(setGetProductsError(true));

      // Display an alert
      Swal.fire({
        title: "Vaya!",
        text: "Ha ocurrido un error inesperado, intente de nuevo más tarde.",
        icon: "error",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
}

const getProducts = () => ({ type: GET_PRODUCTS });

const setGetProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const setGetProductsError = (status) => ({
  type: GET_PRODUCTS_ERROR,
  payload: status,
});

// For deleting products
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(deleteProduct(id));
    try {
      // Deleting on API
      await axiosClient.delete(`/products/${id}`);

      // If there are not errors
      dispatch(setDeleteProductSuccess());

      // Display an alert
      Swal.fire({
        title: "Eliminado!",
        text: "El producto se ha eliminado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      // If errors
      dispatch(setDeleteProductError(true));

      // Display an alert
      Swal.fire({
        title: "Vaya!",
        text: "Ha ocurrido un error inesperado, intente de nuevo más tarde.",
        icon: "error",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
}

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

const setDeleteProductSuccess = () => ({ type: DELETE_PRODUCT_SUCCESS });

const setDeleteProductError = (status) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: status,
});

// For getting product to edit
export function getProductToEditAction(product) {
  return (dispatch) => {
    dispatch(setEditProduct(product));
  };
}

const setEditProduct = (product) => ({
  type: SET_EDIT_PRODUCT,
  payload: product,
});

// For editing product
export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct());
    try {
      // Editing on API
      await axiosClient.put(`/products/${product.id}`, product);

      // If there are not errors
      dispatch(setEditProductSuccess(product));

      // Display an alert
      Swal.fire({
        title: "Editado!",
        text: "El producto se ha editado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      // If errors
      dispatch(setEditProductError(true));

      // Display an alert
      Swal.fire({
        title: "Vaya!",
        text: "Ha ocurrido un error inesperado, intente de nuevo más tarde.",
        icon: "error",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
}

const editProduct = () => ({ type: EDIT_PRODUCT });

const setEditProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
});

const setEditProductError = (status) => ({
  type: EDIT_PRODUCT_ERROR,
  payload: status,
});
