import React from "react";
import logo from "../../../assets/images/logo-is.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="brand logo" />
      </a>
      <a href="/" className="header__text">
        amazing
      </a>
      <div className="header__search">
        <input placeholder="Search a product" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
