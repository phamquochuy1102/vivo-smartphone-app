import React, { useState } from "react";
import "./Carousel.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        <Carousel.Item>
          <picture className="carousel__image">
            <source
              media="(max-width:767px)"
              srcset="https://www.vivosmartphone.vn/uploads/home/banner-Y72-vertical%20.jpg"
            />
            <img src="./assets/img/slideshow-1.jpg" alt="VIVO" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture className="carousel__image">
            <source
              media="(max-width:767px)"
              srcset="https://www.vivosmartphone.vn/uploads/home/Banner-ban-do-yeu-thuong-1080-1957.jpg"
            />
            <img src="./assets/img/slideshow-2.jpg" alt="VIVO" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture className="carousel__image">
            <source
              media="(max-width:767px)"
              srcset="https://www.vivosmartphone.vn/uploads/MANGOADS/banner/x60pro_vertical.jpg"
            />
            <img src="./assets/img/slideshow-3.jpg" alt="VIVO" />
          </picture>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
