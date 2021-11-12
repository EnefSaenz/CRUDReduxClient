import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";

// Redux actions
import { getProductsAction } from "../actions/productsActions";

const Products = () => {
  // Using useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // Calling for getProductsAction
    const getProducts = () => dispatch(getProductsAction());
    getProducts();
    // eslint-disable-next-line
  }, []);

  // Accesing to store's state
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  return (
    <div className="text-center">
      <h2 className="my-5">Listado de Productos</h2>
      {loading ? (
        <div className="lds-dual-ring mx-auto"></div>
      ) : (
        <table className="table table-sm table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="3">No hay productos</td>
              </tr>
            ) : (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Products;
