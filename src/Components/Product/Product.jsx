import React from "react";
import { useHistory } from "react-router";
import "./Product.scss";

const Product = ({ product }) => {
  const {
    image,
    name,
    price,
    oldPrice,
    sim,
    ram,
    pin,
    frontCam,
    backCam,
    os,
    screen,
    insideMemory,
  } = product;
  const history = useHistory();
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div
      className="product-container"
      onClick={() => {
        history.push({
          pathname: "./product-detail",
          state: {
            image,
            name,
            price,
            oldPrice,
            sim,
            pin,
            os,
            frontCam,
            backCam,
            screen,
            insideMemory,
            ram,
            product,
          },
        });
      }}
    >
      <div className="product-image">
        <img src={image} alt="phone" />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">Giá bán: {numberWithCommas(price)}₫</p>
      <p className="product-oldPrice">Giá gốc: {numberWithCommas(oldPrice)}₫</p>
      <p className="product-gift">Quà tặng 200,000đ</p>
      <div className="product-order">
        <button>Xem chi tiết</button>
      </div>
    </div>
  );
};

export default Product;
