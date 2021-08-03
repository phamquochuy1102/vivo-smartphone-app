import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./OrderSuccess.scss";

const OrderSuccess = () => {
  return (
    <div>
      <Navbar />
      <div className="order-success">
        <h1>Đặt hàng thành công</h1>
        <p>Đơn hàng của bạn đã được gửi đi!</p>
        <img src="./assets/img/order-success.jpg" alt="order success" />
      </div>
    </div>
  );
};

export default OrderSuccess;
