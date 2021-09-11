import React, { useContext } from "react";
import logo from "../../../assets/images/logo-is.png";
import "./Header.scss";
import ProductContext from "../../../context/product-context";

function Header() {
  const { handleSearch } = useContext(ProductContext);

  const handleOnSearching = (e) => {
    const keyword = e.target.value;
    handleSearch(keyword);
  };

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="brand logo" />
      </a>
      <a href="/" className="header__text">
        amazing
      </a>
      <div className="header__search">
        <form>
          <input placeholder="Search a product" onChange={handleOnSearching} />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
