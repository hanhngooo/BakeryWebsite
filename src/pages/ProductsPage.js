import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import ProductCard from "../components/Products/productCard";
import productContents from "../components/Products/productContents";
function ProductsPage() {
  return (
    <div>
      <Header />
      <div className="products__list">
        <div className="products__cards">
          {productContents.all.map((product) => {
            return <ProductCard name={product.name} image={product.image} />;
          })}
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
