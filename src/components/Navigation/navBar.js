import React from "react";
import "./navBar.css";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      style={{ top: "0", color: "rgb(100, 100, 100)" }}
    >
      <Navbar.Brand href="/">
        <img
          src={require("../../assets/logo.png")}
          style={{ height: "40px", paddingRight: "5px" }}
          alt="logo"
        />
        <span style={{ fontSize: "14px", color: "rgb(100, 100, 100)" }}>
          Bếp Bánh Lekker
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/">TRANG CHỦ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {" "}
            <Nav.Link href="/sanpham">SẢN PHẨM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {" "}
            <Nav.Link>
              <Link
                to="contact-footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                LIÊN HỆ
              </Link>
            </Nav.Link>
            {/* <Nav.Link href="/lienhe"</Nav.Link> */}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      <div className="nav__contact" style={{ color: "rgb(100, 100, 100" }}>
        <span className="footer__contact--phoneicon">
          <FaPhoneAlt />{" "}
        </span>{" "}
        <a href="tel:0778770284" style={{ color: "rgb(100, 100, 100" }}>
          0778770284
        </a>{" "}
        -{" "}
        <a href="tel:0907169569" style={{ color: "rgb(100, 100, 100" }}>
          0907169569
        </a>
      </div>
    </Navbar>
  );
}

export default NavBar;
