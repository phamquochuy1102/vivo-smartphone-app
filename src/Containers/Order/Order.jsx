import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CheckoutStep from "../../Components/CheckoutStep/CheckoutStep";
import Footer from "../../Components/Footer/Footer";
import "./Order.scss";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOrder } from "../../redux/actions/orderAction";
import { actionTypes } from "../../redux/constants";

const Order = ({
  shippingAddress,
  payAndDeliveryMethod,
  cart,
  cartReducer,
  order,
  success,
}) => {
  const history = useHistory();
  const { fullName, address, phoneNumber, ward, district, city } =
    shippingAddress;
  const { delivery, payment } = payAndDeliveryMethod;
  const shipFee = delivery === "Giao hàng tiết kiệm" ? 28000 : 35000;
  const totalOfItems = cart.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const dispatch = useDispatch();
  const handleOrder = () => {
    dispatch(createOrder({ ...cartReducer, orderItems: cartReducer.cart }));
  };
  useEffect(() => {
    if (success) {
      history.push({
        pathname: `/order/${order._id}`,
      });
      dispatch({ type: actionTypes.ORDER_CREATE_RESET });
    }
  }, [success, dispatch, order, history]);
  return (
    <div>
      <Navbar />
      <CheckoutStep step1 step2 step3 step4 />
      <div className="order-container">
        <div className="left">
          <div className="order-address">
            <h5>Giao tới</h5>
            <div>
              <div className="order-name">{fullName}</div>
              <span className="order-phone"> Điện thoại: {phoneNumber}</span>
            </div>
            <div>
              {address},{ward}, {district}, {city}
            </div>
          </div>
          <div className="order-paymentAndDelivery">
            <h5>
              Phương thức giao hàng: <span>{delivery}</span>
            </h5>
            <h5>
              Phương thức thanh toán: <span>{payment}</span>
            </h5>
          </div>
          <div className="order-products">
            <h5>Đơn hàng</h5>
            {cart.map((item) => (
              <div className="order-products__wrapper">
                <div>
                  <img src={item.image} alt="product" />
                </div>
                <div>
                  <b>{item.name}</b>
                </div>
                <div>
                  {item.quantity} x {numberWithCommas(item.price)}₫
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <h5>Hóa đơn</h5>
          <div className="summary-items">
            <p>Tạm tính</p>
            <p>{numberWithCommas(totalOfItems)}₫</p>
          </div>
          <div className="summary-shipFee">
            <p>Phí vận chuyển</p>
            <p>{numberWithCommas(shipFee)}₫</p>
          </div>
          <div className="summary-total">
            <p>
              <b>Thành tiền</b>
            </p>
            <p className="total">{numberWithCommas(shipFee + totalOfItems)}₫</p>
          </div>
          <div className="order-btn">
            <button onClick={handleOrder}>ĐẶT MUA</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  shippingAddress: state.cartReducer.shippingAddress,
  payAndDeliveryMethod: state.cartReducer.payAndDeliveryMethod,
  cart: state.cartReducer.cart,
  cartReducer: state.cartReducer,
  order: state.orderReducer.order,
  success: state.orderReducer.success,
});

export default connect(mapStateToProps)(Order);
