import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <div className="menu">
        <a href="/Order">Order</a>
        <a href="/Order Review">Order Review</a>
        <a href="/Inventory">Inventory</a>
        <a href="/About">About</a>
      </div>
    </nav>
  );
};

export default Header;
