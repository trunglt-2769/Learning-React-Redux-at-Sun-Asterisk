import React, { useRef } from "react";
import logo from "../../../assets/images/logo-is.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../../pages/Products/filters.slice";

function Header() {
  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null); //Debounce searching

  const handleSearch = (e) => {
    typingTimeoutRef.current && clearTimeout(typingTimeoutRef.current);

    //Debounce searching
    typingTimeoutRef.current = setTimeout(() => {
      const keyword = e.target.value;
      dispatch(searchProducts({ name: keyword }));
    }, 500);
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
          <input placeholder="Search a product" onChange={handleSearch} />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
