import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/header";
import AboutUs from "./components/AboutUs/aboutUs.js";
import Slides from "./components/Slides/slides";
import Products from "./components/Products/products";
import Footer from "./components/Footer/footer";
function App() {
  const Home = () => {
    return (
      <>
        <Header />
        <AboutUs />
        <Slides />
        <Products />
        <Footer />
      </>
    );
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
