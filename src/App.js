import React from "react";
import "./App.css";

import Header from "./components/Header/header";
import AboutUs from "./components/AboutUs/aboutUs.js";
import Slides from "./components/Slides/slides";
import Products from "./components/Products/products";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Slides />
      <Products />
    </div>
  );
}

export default App;
