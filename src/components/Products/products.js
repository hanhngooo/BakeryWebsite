import React from "react";
import "./products.css";
import { Parallax } from "react-parallax";
import { a } from "react-router-dom";
import ProductCard from "./productCard";
import productContents from "./productContents.js";

function Products() {
  return (
    <div className="products">
      <Parallax bgImage={require("../../assets/banner-7.jpeg")} strength={300}>
        <div className="products__parallax">
          <hr className="header__line-1" />
          <div className="products__title">Các loại bánh nổi bật</div>
          <hr className="header__line-2" />
        </div>
      </Parallax>
      <div className="products__list">
        <div className="products__cards">
          {productContents.top.map((product) => {
            return <ProductCard name={product.name} image={product.image} />;
          })}
        </div>
        <a href="/sanpham">
          <button className="button">Xem chi tiết</button>
        </a>
      </div>
    </div>
  );
}

export default Products;
