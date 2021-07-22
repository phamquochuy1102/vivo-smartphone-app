import React from "react";
import { useLocation } from "react-router";
import "./ProductDetailOverview.scss";
import ReactImageZoom from "react-image-zoom";
import { useState } from "react";
import { addToCart } from "../../redux/actions/cartAction";
import { connect } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const ProductDetailOverview = ({ addToCart, addStatus }) => {
  const { state } = useLocation();
  const { image, name, price, oldPrice, product } = state;
  const props = { height: 500, zoomWidth: 300, img: image };
  const [quantity, setQuantity] = useState(1);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const createNotification = (type) => {
    return () => {
      if (type === "success") {
        NotificationManager.success("Thêm thành công", "Giỏ hàng");
      }
    };
  };

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <ReactImageZoom {...props} />
      </div>

      <div className="product-detail__info">
        <h2 className="info-name">Điện thoại {name}</h2>
        <p className="info-desc">
          Vivo tung ra chiếc điện thoại {name} (2021) là phiên bản nâng cấp của{" "}
          {name} ra mắt trước đó. Chiếc smartphone này được nâng cấp lên bộ xử
          lý mạnh mẽ hơn mà vẫn giữ được thiết kế siêu mỏng và cụm camera chụp
          đẹp đáng kinh ngạc.
        </p>
        <p className="info-price">Giá chỉ từ: {numberWithCommas(price)}₫ </p>
        <p className="info-oldPrice">Giá gốc: {numberWithCommas(oldPrice)}₫</p>
        <div className="info-quantity">
          <h5>Số lượng:</h5>
          <button
            onClick={() => {
              if (quantity <= 1) {
                setQuantity(quantity);
              } else if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <div
          className="info-button"
          onClick={() => {
            addToCart({ ...product, quantity });
          }}
        >
          <button onClick={createNotification("success")}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  addStatus: state.cartReducer.addStatus,
});

export default connect(mapStateToProps, { addToCart })(ProductDetailOverview);
/*() => {
              addToCart({ ...product, quantity });
              createNotification("success");
            } */
