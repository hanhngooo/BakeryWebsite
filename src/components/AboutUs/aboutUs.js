import React from "react";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__left">
        <img src={require("../../assets/banner-2.jpg")} alt="logo" />
      </div>

      <div className="aboutUs__right">
        <h1 className="mainHeading">Bếp Bánh Lekker</h1>
        <h3 className="subHeading">Làm từ yêu thương</h3>
        <p class="description">
          Lekker /léc cờ/ diễn tả những món ăn ngon, hấp dẫn, hoặc đơn giản là
          những điều tuyệt hảo và tốt trong tiếng Hà Lan. Từ “Lekker” được người
          dân Hà Lan sử dụng rất phổ biến trong nhiều hoàn cảnh. Vì vậy, chúng
          tôi lấy cảm hứng từ đó và cho ra đời “Bếp Bánh Lekker” - một bếp bánh
          nhỏ với mục tiêu đem lại những món bánh ngọt ngon, đảm bảo chất lượng
          và trang trí đẹp mắt đến cho mọi người. Và mùa thu này Bếp Bánh Lekker
          chúng tôi sẽ mang đến những chiếc bánh trung thu “lekker”, thơm ngon
          đến cho mọi người thưởng thức.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
