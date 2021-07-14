import React from "react";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature-item jovi">
        <div className="feature-item__content">
          <p>công nghệ</p>
          <h4>Jovi thông minh AI trợ lý cá nhân của bạn</h4>
          <button>Tìm hiểu thêm</button>
        </div>
      </div>
      <div className="feature-item new-screen">
        <div className="feature-item__content">
          <p>công nghệ</p>
          <h4>Cá tính hóa trải nghiệm người dùng</h4>
          <button>Tìm hiểu thêm</button>
        </div>
      </div>
      <div className="feature-item funtouchos">
        <div className="feature-item__content">
          <p>công nghệ</p>
          <h4>Tùy chỉnh chuyên sâu trên nền tảng Android 10</h4>
          <button>Tìm hiểu thêm</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
