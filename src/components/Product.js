import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

// Redux actions
import {
  deleteProductAction,
  getProductToEditAction,
} from "../actions/productsActions";

const Product = ({ product }) => {
  // Defractoring
  const { id, name, price } = product;

  // Using useDispatch
  const dispatch = useDispatch();
  const history = useHistory(); // Enable history for redirecting

  // Calling for addProductAction
  const deleteProduct = (id) => {
    // For asking user to confirm
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--bs-danger)",
      cancelButtonColor: "var(--bs-primary)",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Passing to action
        dispatch(deleteProductAction(id));
      }
    });
  };

  // Formating price
  const numberFormat = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  // Function for redirecting to edit
  const redirectToEdit = (product) => {
    dispatch(getProductToEditAction(product));
    history.push(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td className="fw-bold">{numberFormat.format(price)}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-dark"
          onClick={() => redirectToEdit(product)}
        >
          <FontAwesomeIcon icon="edit" />
          <span className="d-none d-md-inline"> Editar</span>
        </button>
        <p class="d-sm-none mb-1"></p>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => deleteProduct(id)}
        >
          <FontAwesomeIcon icon="trash" />
          <span className="d-none d-md-inline"> Eliminar</span>
        </button>
      </td>
    </tr>
  );
};

export default Product;
