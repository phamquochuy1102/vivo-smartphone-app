import React from "react";
import { useState } from "react";
import "./Technology.scss";

const Technology = () => {
  const [gimbal, setGimbal] = useState(false);
  const [zeiss, setZeiss] = useState(true);
  const [pixel, setPixel] = useState(false);
  const [background, setBackground] = useState(
    "https://www.vivosmartphone.vn/uploads/home/Co-engineered%20ZEISS.jpg"
  );
  const setActiveItem = (type) => {
    setGimbal(false);
    setPixel(false);
    setZeiss(false);
    if (type === "gimbal") {
      setGimbal(true);
      setBackground(
        "https://www.gizmochina.com/wp-content/uploads/2020/05/Vivo-X50-Camera-Teaser-1.jpeg"
      );
    } else if (type === "zeiss") {
      setZeiss(true);
      setBackground(
        "https://www.vivosmartphone.vn/uploads/home/Co-engineered%20ZEISS.jpg"
      );
    } else if (type === "pixel") {
      setPixel(true);
      setBackground(
        "https://www.vivosmartphone.vn/uploads/home/Pixel%20shift.jpg"
      );
    }
  };
  const styleActive = {
    color: "white",
    borderBottom: "1px solid white",
  };
  const backgroundActive = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "700px",
    width: "100%",
  };
  return (
    <div className="technology-container" style={backgroundActive}>
      <h2>tiên phong dẫn đầu công nghệ</h2>
      <ul className="technology-list">
        <li
          className="technology-item"
          style={gimbal ? styleActive : null}
          onClick={() => setActiveItem("gimbal")}
        >
          Hệ Thống Camera Gimbal 2.0
        </li>
        <li
          className="technology-item"
          style={zeiss ? styleActive : null}
          onClick={() => setActiveItem("zeiss")}
        >
          Camera Đồng chế tác cùng ZEISS
        </li>
        <li
          className="technology-item"
          style={pixel ? styleActive : null}
          onClick={() => setActiveItem("pixel")}
        >
          Công nghệ Pixel shift
        </li>
      </ul>
      <div className="technology-button">
        <button>Tìm hiểu thêm</button>
      </div>
      <div className="technology-background"></div>
    </div>
  );
};

export default Technology;
