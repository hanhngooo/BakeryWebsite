import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img
          src={require("../../assets/logo.png")}
          style={{ height: "40px", paddingRight: "5px" }}
          alt="logo"
        />
        <span style={{ fontSize: "14px" }}>Bếp Bánh Lekker</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Trang chủ</Nav.Link>
          <Nav.Link href="/sanpham">Sản phẩm</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
