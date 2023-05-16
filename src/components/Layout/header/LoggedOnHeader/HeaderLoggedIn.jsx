import React from "react";
import logo from "../../../../assets/img/logo.svg";
import "./HeaderLoggedIn.css";
import { Link } from "react-router-dom";

const HeaderLoggedIn = () => {
  const username = localStorage.getItem("username");

  return (
    <header class="header">
      <div class="header__logo__logged">
        <Link to="/">
          <img className="header__logo__image" src={logo} alt="Baloot" />
        </Link>
        <Link to="/">
          <div class="header__logo__text text text--xlarge">Baloot</div>
        </Link>
      </div>
      <div class="user-info">
        <p class="username">{username}</p>
        <p class="card-info">
          <button>Cart 0</button>
        </p>
      </div>
    </header>
  );
};

export default HeaderLoggedIn;
