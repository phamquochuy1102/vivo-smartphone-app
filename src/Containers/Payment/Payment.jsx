import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CheckoutStep from "../../Components/CheckoutStep/CheckoutStep";
import "./Payment.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePayAndDeliveryMethod } from "../../redux/actions/cartAction";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Payment = () => {
  const [delivery, setDelivery] = useState("Giao hàng tiết kiệm");
  const [payment, setPayment] = useState("Thanh toán bằng tiền mặt");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChangeDelivery = (e) => {
    setDelivery(e.target.value);
  };
  const handleChangePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(savePayAndDeliveryMethod({ delivery, payment }));
    history.push({
      pathname: "/order",
    });
  };
  return (
    <div>
      <Navbar />
      <CheckoutStep step1 step2 step3 />
      <div className="payment">
        <h2>1. Chọn hình thức giao hàng</h2>
        <div className="payment-deliveryMethod">
          <input
            type="radio"
            name="deliveryMethod"
            id="giaoTietKiem"
            value="Giao Hàng tiết kiệm"
            defaultChecked
            required
            onChange={handleChangeDelivery}
          />
          <label htmlFor="giaoTietKiem">
            <img src="./assets/img/ghtk.png" alt="ghtk" />
            Giao Tiết Kiệm
          </label>
          <br />
          <input
            type="radio"
            name="deliveryMethod"
            id="giaoHangNhanh"
            value="Giao Hàng Nhanh"
            required
            onChange={handleChangeDelivery}
          />
          <label htmlFor="giaoNhanh">
            <img src="./assets/img/ghn.png" alt="ghn" />
            Giao Hàng Nhanh
          </label>
        </div>
        <h2>2. Chọn hình thức thanh toán</h2>
        <div className="payment-paymentMethod">
          <input
            type="radio"
            name="paymentMethod"
            id="cash"
            value="Thanh toán bằng tiền mặt"
            defaultChecked
            required
            onChange={handleChangePayment}
          />
          <label htmlFor="tienmat">
            <img src="./assets/img/tienmat.svg" alt="cash" />
            Thanh toán bằng tiền mặt
          </label>
          <br />
          <input
            type="radio"
            name="paymentMethod"
            id="momo"
            value="Thanh toán bằng ví MoMo"
            required
            onChange={handleChangePayment}
          />
          <label htmlFor="momo">
            <img src="./assets/img/momo.svg" alt="momo" />
            Thanh toán bằng ví MoMo
          </label>
          <br />
          <input
            type="radio"
            name="paymentMethod"
            id="zalopay"
            value="Thanh toán bằng ví Zalo Pay"
            required
            onChange={handleChangePayment}
          />
          <label htmlFor="zalopay">
            <img src="./assets/img/zalopay.svg" alt="zalo" />
            Thanh toán bằng ví Zalo Pay
          </label>
        </div>
      </div>
      <div className="button">
        <button onClick={handleSubmit}>Tiếp tục</button>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
