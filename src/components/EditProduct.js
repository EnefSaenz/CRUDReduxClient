import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { editProductAction } from "../actions/productsActions";

const EditProduct = ({ history }) => {
  // States for component
  const [product, setProduct] = useState({
    name: "",
    price: 0,
  });

  //Defractoring
  const { name, price } = product;

  // Using useDispatch
  const dispatch = useDispatch();

  // Accesing to store's state
  const productToEdit = useSelector((state) => state.products.producttoedit);

  // Using useEffect
  useEffect(() => {
    if (productToEdit) setProduct(productToEdit);
  }, [productToEdit]);

  // On Change
  const onChange = (e) => {
    e.preventDefault();

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Passing to action
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(editProductAction(product));
    history.push("/");
  };

  if (!productToEdit) {
    history.push("/");
  }

  return (
    <div className="card border-danger border-bottom-0 rounded-top mx-auto new-product">
      <div className="card-body text-center p-4">
        <h3 className="card-title text-dark">Editar Producto</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group py-3 px-1">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border"
                name="name"
                placeholder=" "
                value={name}
                onChange={onChange}
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
                onChange={onChange}
              />
              <label htmlFor="price">
                <FontAwesomeIcon icon="dollar-sign" /> Precio
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary d-block w-100 mt-4">
            <FontAwesomeIcon icon="edit" /> Editar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
