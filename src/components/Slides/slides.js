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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          commodi placeat nihil animi, id dicta, rem recusandae ex earum
          cupiditate unde eius aliquid dolore voluptatibus delectus hic
          inventore similique dolores. Veritatis sit dicta et impedit
          repellendus quo aspernatur, eum vitae quia quos vero natus totam, sint
          nisi doloribus, quibusdam reiciendis?
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
