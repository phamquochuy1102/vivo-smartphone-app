import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import CheckoutStep from "../../Components/CheckoutStep/CheckoutStep";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { saveShippingAddress } from "../../redux/actions/cartAction";
import "./ShippingAddress.scss";

const ShippingAddress = ({ userInfo, shippingAddress }) => {
  const history = useHistory();
  if (!userInfo) {
    history.push({
      pathname: "/login",
    });
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [district, setDistrict] = useState(shippingAddress.district);
  const [ward, setWard] = useState(shippingAddress.ward);
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        phoneNumber,
        ward,
        district,
        city,
      })
    );
    history.push({
      pathname: "/payment",
    });
  };
  return (
    <div>
      <Navbar />
      <CheckoutStep step1 step2 />
      <form onSubmit={handleSubmit} className="adddress-info">
        <h1>Thông tin giao hàng</h1>
        <div>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              required
              autoFocus
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Số điện thoại"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>

          <div>
            <input
              type="text"
              name="city"
              placeholder="Tỉnh/thành phố"
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div>
            <input
              type="text"
              name="district"
              placeholder="Quận/huyện"
              required
              onChange={(e) => setDistrict(e.target.value)}
              value={district}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phường/xã"
              required
              onChange={(e) => setWard(e.target.value)}
              value={ward}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ nhà/công ty"
              required
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
        </div>
        <div>
          <button type="submit">Tiếp tục</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userReducer.userInfo,
  shippingAddress: state.cartReducer.shippingAddress,
});

export default connect(mapStateToProps)(ShippingAddress);
