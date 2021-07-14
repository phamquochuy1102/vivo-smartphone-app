import React from "react";
import "./Explore.scss";

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="explore-above">
        <div className="explore-above__content">
          <p>Khám phá</p>
          <h2>Toàn cảnh sự kiện trực tuyến</h2>
          <p>Sự kiện ra mắt sản phẩm vivo V20</p>
          <button>Khám phá câu chuyện</button>
        </div>
        <div className="explore-above__overlay"></div>
      </div>
      <div className="explore-below"></div>
    </div>
  );
};

export default Explore;
