import React from "react";
import "./Product.scss";

const Product = ({ product }) => {
  const { image, name, price, oldPrice } = product;
  return (
    <div className="product-container">
      <img src={image} alt="phone" />
      <p className="product-name">{name}</p>
      <p className="product-price">Giá bán: {price}₫</p>
      <p className="product-oldPrice">Giá gốc: {oldPrice}₫</p>
      <p className="product-gift">Quà tặng 200.000đ</p>
      <div className="product-order">
        <button>Đặt mua</button>
      </div>
    </div>
  );
};

export default Product;
