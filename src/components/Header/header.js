import React from "react";
import "./header.css";
import { Parallax } from "react-parallax";
function Header() {
  return (
    <div className="header">
      <Parallax bgImage={require("../../assets/banner-1.jpg")} strength={300}>
        <div className="header__parallax">
          <hr className="header__line-1" />
          <div className="header__logo">
            <img src={require("../../assets/logo.png")} alt="logo" />
          </div>
          <hr className="header__line-2" />
        </div>
      </Parallax>

      <div style={{ height: "100vh" }}>abc</div>
    </div>
  );
}

export default Header;
