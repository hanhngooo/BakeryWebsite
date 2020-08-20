import React from "react";
import "./navBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      style={{ color: "rgb(100, 100, 100)" }}
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
            <Nav.Link href="/lienhe">LIÊN HỆ</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <div className="nav__contact">
        <span className="footer__contact--phoneicon">
          <FaPhoneAlt />{" "}
        </span>{" "}
        0778770284 - 0907169569
      </div>
    </Navbar>
  );
}

export default NavBar;
