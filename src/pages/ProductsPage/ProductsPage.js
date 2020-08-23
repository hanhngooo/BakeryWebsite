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
            <div className="products__noteItem--core">
              <div>
                <span role="img" aria-label="core">
                  🌕 Bánh nướng
                </span>{" "}
              </div>
              <div>
                <span role="img" aria-label="core">
                  🌕 Bánh dẻo
                </span>{" "}
              </div>
            </div>
            <div className="products__noteItem--core">
              Nhân tự chọn: thập cẩm, đậu xanh, đậu xanh lá dứa, đậu xanh hạt
              dưa, trà xanh, đậu đỏ táo đỏ, đậu đen mè đen, hạt sen, sữa dừa,
              khoai môn
            </div>
          </div>

          <div className="products__noteItem">
            <div className="products__noteItem--core">
              <div>
                <span role="img" aria-label="core">
                  🌕 Bánh trung thu hiện đại
                </span>{" "}
              </div>
              <div>
                <span role="img" aria-label="core">
                  🌕 Bánh trung thu ngũ sắc
                </span>{" "}
              </div>
            </div>
            <div className="products__noteItem--core">
              Nhân tự chọn: đậu xanh, đậu xanh lá dứa, trà xanh, đậu đỏ táo đỏ,
              đậu đen mè đen
            </div>
          </div>
        </div>
        <div className="products__notePrice">
          <div className="products__noteItem--core">
            * Hộp combo bánh nướng (1 trứng) / bánh dẻo:
            <div>
              - 2 bánh/mỗi bánh 150g:{" "}
              <span style={{ color: "red" }}>160,000đ</span>
            </div>
            <div>
              - 4 bánh/mỗi bánh 150g:{" "}
              <span style={{ color: "red" }}>300,000đ</span>
            </div>
          </div>
          <div className="products__noteItem--core">
            * Hộp combo bánh trung thu hiện đại (1 trứng) / bánh trung thu ngũ
            sắc (1 trứng):
            <div>
              - 2 bánh/mỗi bánh 150g:{" "}
              <span style={{ color: "red" }}>190,000đ</span>
            </div>
            <div>
              - 4 bánh/mỗi bánh 150g:{" "}
              <span style={{ color: "red" }}>360,000đ</span>
            </div>
          </div>
          <p>
            Vui lòng lưu ý với chúng tôi nếu bạn không muốn nhân trứng muối.
          </p>
          <div className="products__noteItem--core">
            Phí ship ưu đãi:
            <div>
              Quận 1, 3, 5, 10, 11, Tân Bình:{" "}
              <span style={{ color: "red" }}>Free</span>
            </div>
            <div></div>
            Những quận khác: <span style={{ color: "red" }}>20,000đ</span>
          </div>
          <p>
            **{" "}
            <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Free ship
            </span>{" "}
            khi order từ 5 hộp (4 bánh) trở lên**
          </p>
        </div>
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
      <div>
        <p>Các bạn có thể tuỳ chọn những mẫu hộp xinh xinh…</p>
        <div className="products__list">
          <div className="products__cards">
            {productContents.boxes.map((box) => {
              return <ProductCard name={box.name} image={box.image} />;
            })}
          </div>{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductsPage;
