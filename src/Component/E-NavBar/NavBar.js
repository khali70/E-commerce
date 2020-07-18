import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../style/style";
import Logo from "../../logo.svg";
function NavBar() {
  return (
    <header className="navbar NavWarpper navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        {/* copy rights of the icon link */}
        {/* https://www.iconfinder.com/icons/1243689/call_phone_iconCreative Commons (Attribution 3.0 Unported);https://www.iconfinder.com/Makoto_msk */}
        <img src={Logo} alt="store" className="nav-brand" />
      </Link>
      <ul className="navbar-nav aligh-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link ">
            store
          </Link>
        </li>
      </ul>
      <Link to="Store" className="ml-auto">
        <Button>
          <span className="mr-2">
            <i className="fa fa-cart-plus"></i>
          </span>
          My Cart
        </Button>
      </Link>
    </header>
  );
}

export default NavBar;
