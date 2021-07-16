import React from "react";
import { useLocation } from "react-router";
import "./ProductDetailOverview.scss";

export const ProductDetailOverview = () => {
  const { state } = useLocation();
  const { image, name, price, oldPrice } = state;
  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={image} alt="product" />
      </div>

      <div className="product-detail__info">
        <h2 className="info-name">Điện thoại {name}</h2>
        <p className="info-desc">
          Vivo tung ra chiếc điện thoại Vivo V20 (2021) là phiên bản nâng cấp
          của Vivo V20 ra mắt trước đó. Chiếc smartphone này được nâng cấp lên
          bộ xử lý mạnh mẽ hơn mà vẫn giữ được thiết kế siêu mỏng và cụm camera
          chụp đẹp đáng kinh ngạc.
        </p>
        <p className="info-price">Giá chỉ từ: {price}₫ </p>
        <p className="info-oldPrice">Giá gốc: {oldPrice}₫</p>
        <div className="info-button">
          <button>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
};
