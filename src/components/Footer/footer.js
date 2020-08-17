import React from "react";
import "./footer.css";
import { GrFacebook } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__header">
        <div className="footer__header--logo">
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>
      </div>
      <div className="footer__contact">
        <div className="footer__contact--item">
          <a
            className="footer__contact--link"
            href="https://www.facebook.com/profile.php?id=100008428893615"
          >
            <GrFacebook />
          </a>
        </div>
        <div className="footer__contact--item">
          <FaPhoneAlt />
          <ul>
            <li> 0778770284 (Chị Trang)</li>
            <li>0907169569 (chị Trân)</li>
          </ul>
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright--paragraph">
          &copy; Copyright. Bếp Bánh Lekker. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
