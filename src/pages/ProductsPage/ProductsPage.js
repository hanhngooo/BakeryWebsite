import React from "react";
import { Parallax } from "react-parallax";
import "./ProductsPage.css";
import Footer from "../../components/Footer/footer";
import ProductCard from "../../components/Products/productCard";
import productContents from "../../components/Products/productContents";

function ProductsPage() {
  return (
    <div className="products">
      <Parallax bgImage={require("../../assets/banner-7.jpeg")} strength={300}>
        <div className="products__parallax">
          <hr className="header__line-1" />
          <div className="products__title">Các loại bánh trung thu</div>
          <hr className="header__line-2" />
        </div>
      </Parallax>
      <div className="products__noteWrap">
        <h5>Thông tin giá bánh</h5>
        <div className="products__note">
          <div className="products__noteItem">
            <div className="products__noteItem--price">
              <p>Bánh 150gram </p>
              <p>
                Hộp 2 cái (có trứng):{" "}
                <span style={{ color: "red" }}>150,000đ</span>
              </p>
              <p>
                Hộp 4 cái (có trứng):{" "}
                <span style={{ color: "red" }}>290,000đ</span>
              </p>
            </div>
          </div>

          <div className="products__noteItem">
            <p>Tuỳ chọn nhân:</p>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân thập cẩm
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân đậu xanh
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân đậu xanh lá dứa{" "}
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân đậu xanh hạt dưa
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân trà xanh{" "}
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân đậu đỏ táo đỏ{" "}
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân đậu đen mè đen
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân hạt sen
              </span>{" "}
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân sữa dừa
              </span>
            </div>
            <div className="products__noteItem--core">
              <span role="img" aria-label="core">
                🌕 Nhân khoai môn
              </span>
            </div>
          </div>
        </div>
        <p>
          Bánh mặc định có trứng muối . Vui lòng lưu ý với chúng tôi nếu bạn
          không muốn nhân trứng muối.
        </p>
      </div>
      <div className="products__list">
        <div className="products__cards">
          {productContents.all.map((product) => {
            return (
              <ProductCard
                name={product.name}
                image={product.image}
                description={product.description}
              />
            );
          })}
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
