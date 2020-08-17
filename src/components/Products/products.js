import React from "react";
import "./products.css";
import { Parallax } from "react-parallax";
import { Card } from "react-bootstrap";

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
          <Card className="products__card">
            <div className="products__card--imgBox">
              <Card.Img
                className="products__card--img"
                variant="top"
                src={require("../../assets/type-thapcam.jpeg")}
              />
            </div>
            <Card.Body>
              <Card.Title className="products__card--title">
                Bánh nướng thập cẩm{" "}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="products__card">
            <div className="products__card--imgBox">
              <Card.Img
                className="products__card--img"
                variant="top"
                src={require("../../assets/type-hiendai.jpeg")}
              />
            </div>
            <Card.Body>
              <Card.Title className="products__card--title">
                Bánh trung thu hiện đại
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="products__card">
            <div className="products__card--imgBox">
              <Card.Img
                className="products__card--img"
                variant="top"
                src={require("../../assets/type-daudo.jpeg")}
              />
            </div>
            <Card.Body>
              <Card.Title className="products__card--title">
                Bánh nướng đậu đỏ táo đỏ{" "}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="products__card">
            <div className="products__card--imgBox">
              <Card.Img
                className="products__card--img"
                variant="top"
                src={require("../../assets/type-dauxanh.jpeg")}
              />
            </div>
            <Card.Body>
              <Card.Title className="products__card--title">
                Bánh nướng đậu xanh{" "}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <button className="button">Xem chi tiết</button>
      </div>
    </div>
  );
}

export default Products;
