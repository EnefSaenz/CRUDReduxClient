import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Redux actions
import { addProductAction } from "../actions/productsActions";
import { showAlertAction, hideAlertAction } from "../actions/alertsActions";

const NewProduct = ({ history }) => {
  // States for component
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Using useDispatch
  const dispatch = useDispatch();

  // Accesing to store's state
  const loading = useSelector((state) => state.products.loading);
  const alert = useSelector((state) => state.alerts.alert);

  // Calling for addProductAction
  const addProduct = (product) => dispatch(addProductAction(product));

  // On submit
  const submitAddProduct = (e) => {
    e.preventDefault();

    // To validate form
    if (name.trim() === "" || price <= 0) {
      // To construct the responseAlert
      const responseAlert = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger",
      };
      dispatch(showAlertAction(responseAlert));
      return;
    }

    // No errrors
    dispatch(hideAlertAction());

    // Add new product
    addProduct({ name, price });

    // Redirecting
    history.push("/");
  };

  return (
    <div className="card border-danger border-bottom-0 rounded-top mx-auto new-product">
      <div className="card-body text-center p-4">
        <h3 className="card-title text-dark">Agregar Producto</h3>
        {alert ? <div className={alert.classes}>{alert.msg}</div> : null}
        <form onSubmit={submitAddProduct}>
          <div className="form-group py-3 px-1">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border"
                name="name"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">
                <FontAwesomeIcon icon="shopping-cart" /> Producto
              </label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control border"
                name="price"
                placeholder=" "
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <label htmlFor="price">
                <FontAwesomeIcon icon="dollar-sign" /> Precio
              </label>
            </div>
          </div>
          {loading ? (
            <div className="lds-dual-ring mt-4 mb-0"></div>
          ) : (
            <button
              type="submit"
              className="btn btn-primary d-block w-100 mt-4"
            >
              <FontAwesomeIcon icon="plus-circle" /> Agregar
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
