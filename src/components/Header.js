import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand mb-0 h1">
          Inventario<span className="d-none d-md-inline"> de productos</span>
        </Link>

        <Link to={"/products/new"} className="btn btn-outline-danger me-2">
          Agregar&nbsp;
          <span className="d-none d-md-inline">producto&nbsp;</span>{" "}
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
