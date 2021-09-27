import React from "react";
import logo from "./assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Sign</span>
            <span className="header__optionLineTwo">In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
