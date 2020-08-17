import React from "react";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__left">
        <img src={require("../../assets/banner-2.jpg")} />
      </div>

      <div className="aboutUs__right">
        <h1 className="mainHeading">Bếp Bánh Lekker</h1>
        <h3 className="subHeading">Làm từ yêu thương</h3>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          commodi placeat nihil animi, id dicta, rem recusandae ex earum
          cupiditate unde eius aliquid dolore voluptatibus delectus hic
          inventore similique dolores. Veritatis sit dicta et impedit
          repellendus quo aspernatur, eum vitae quia quos vero natus totam, sint
          nisi doloribus, quibusdam reiciendis?
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
