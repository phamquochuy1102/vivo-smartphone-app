import React from "react";
import "./TypeSeries.scss";

const TypeSeries = () => {
  return (
    <div className="typeSeries-container">
      <div className="typeSeries-item">
        <h4>X Series</h4>
        <div className="typeSeries-item__image">
          <img src="./assets/img/type1.jpg" alt="type X" />
          <p>Smartphone cao cấp tiên phong công nghệ</p>
        </div>
      </div>
      <div className="typeSeries-item">
        <h4>Y Series</h4>
        <div className="typeSeries-item__image">
          <img src="./assets/img/type2.png" alt="type Y" />
          <p>Smartphone thời thượng dẫn đầu xu hướng</p>
        </div>
      </div>
      <div className="typeSeries-item">
        <h4>Z Series</h4>
        <div className="typeSeries-item__image">
          <img src="./assets/img/type3.png" alt="type Z" />
          <p>Smartphone phổ thông dành cho mọi người</p>
        </div>
      </div>
    </div>
  );
};

export default TypeSeries;
