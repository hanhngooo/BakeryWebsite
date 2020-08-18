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
          <div className="footer__contact--item--phone">
            <p className="footer__contact--paragraph">Liên hệ đặt bánh qua: </p>
            <p className="footer__contact--paragraph">
              <span className="footer__contact--phoneicon">
                <FaPhoneAlt />
              </span>{" "}
              0778770284 (Chị Trang){" "}
            </p>
            <p className="footer__contact--paragraph">
              <span className="footer__contact--phoneicon">
                <FaPhoneAlt />{" "}
              </span>
              0907169569 (chị Trân){" "}
            </p>

            <div className="footer__contact--number"></div>
          </div>
        </div>
        <div className="footer__contact--item">
          <a
            className="footer__contact--icon"
            href="https://www.facebook.com/profile.php?id=100008428893615"
          >
            <GrFacebook />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright--paragraph">
          &copy; Copyright. Bếp Bánh Lekker. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
