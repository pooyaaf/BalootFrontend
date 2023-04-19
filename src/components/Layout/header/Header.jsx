import React from "react";
import logo from "../../../assets/img/logo.svg";
import magnifier from "../../../assets/img/search.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo__image" src={logo} alt="Baloot" />
        </Link>
        <Link to="/">
          <div className="header__logo__text text text--xlarge">Baloot</div>
        </Link>
      </div>

      <div className="header__search">
        <select className="header__search__options">
          <option value="name">name</option>
          <option value="price">price</option>
        </select>
        <input
          type="text"
          className="header__search__input"
          placeholder="search your product ..."
        />
        <div className="header__search__magnifier">
          <img src={magnifier} alt="magnifier" />
        </div>
      </div>

      <div className="d-flex align-items-center">
        <Link to="/login">
          <button type="button" className="btn  login-section btn-primary mr-3">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button type="button" className="btn  login-section btn-primary">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
