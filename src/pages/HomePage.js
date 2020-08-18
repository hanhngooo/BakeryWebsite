import React from "react";
import Header from "../components/Header/header";
import AboutUs from "../components/AboutUs/aboutUs.js";
import Slides from "../components/Slides/slides";
import Products from "../components/Products/products";
import Footer from "../components/Footer/footer";
function HomePage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Slides />
      <Products />
      <Footer />
    </div>
  );
}

export default HomePage;
