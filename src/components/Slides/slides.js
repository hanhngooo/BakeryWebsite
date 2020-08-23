import React from "react";
import "./slides.css";
import Carousel from "react-bootstrap/Carousel";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";
import banner6 from "../../assets/banner-6.jpg";

function Slides() {
  return (
    <div className="slideShow">
      <div className="slideShow__left">
        <p class="description">
          Được chế biến từ nguyên liệu tự nhiên, đảm bảo chất lượng cao như trà
          xanh, táo đỏ, mứt trái cây, trứng muối homemade, lạp xưởng tươi, bánh
          trung thu Bếp Bánh Lekker có độ ngọt vừa phải, vừa thơm ngon vừa bắt
          mắt. Bếp Bánh Lekker mang đến 4 loại bánh trung thu với đa dạng nhân
          tùy chọn, từ bánh nướng và bánh dẻo truyền thống đến bánh trung thu
          hiện đại và bánh ngũ sắc, để mọi người thỏa sức thưởng thức. Bánh
          không chỉ lekker - ngon, mà Bếp Bánh Lekker còn sử dụng những chiếc
          hộp bánh xinh xắn, để mọi người biếu tặng những người thương yêu dịp
          Tết Trung thu này ^^
        </p>
      </div>
      <div className="slideShow__right">
        <Carousel
          controls={false}
          indicators
          interval={2500}
          pauseOnHover={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={banner3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={banner4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={banner5}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={banner6}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slides;
