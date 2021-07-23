import React from "react";
import "./CheckoutStep.scss";

const CheckoutStep = (props) => {
  return (
    <div className="row checkout-step">
      <div className={props.step1 ? "active" : ""}>
        <span>①</span> Đăng nhập
      </div>
      <div className={props.step2 ? "active" : ""}>
        <span>②</span> Thông tin giao hàng
      </div>
      <div className={props.step3 ? "active" : ""}>
        <span>③</span> Giao hàng & Thanh toán
      </div>
      <div className={props.step4 ? "active" : ""}>
        <span>④</span> Hóa đơn
      </div>
    </div>
  );
};

export default CheckoutStep;
