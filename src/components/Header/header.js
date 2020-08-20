import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__banner"
        src={require("../../assets/banner-1.jpg")}
        alt="header"
      />
      <div className="header__items">
        <hr className="header__line-1" />
        <div className="header__logo">
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>
        <hr className="header__line-2" />
      </div>
    </div>
  );
}

export default Header;
