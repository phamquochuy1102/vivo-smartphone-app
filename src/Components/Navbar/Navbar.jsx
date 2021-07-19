import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ cartItem }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const displayModal = {
    display: "block",
  };
  return (
    <div className="navbar-container">
      <div className="navbar-list__mobile" onClick={openModal}>
        <i class="fas fa-stream"></i>
      </div>
      <div className="navbar-logo">
        <Link to="/">
          {" "}
          <img
            src="https://www.vivosmartphone.vn/themes/vivo/img/logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-list">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/products">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/funtouchOs">FuntouchOS</Link>
          </li>
          <li>
            <Link to="/explore">Khám phá</Link>
          </li>
          <li>
            <Link to="/support">Hỗ trợ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-auth">
        <div className="navbar-login">
          <Link to="/login">Đăng nhập</Link>
        </div>
        <div className="navbar-register">
          <Link to="/register">Đăng ký</Link>
        </div>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">
          {" "}
          <i class="fas fa-shopping-cart"></i>{" "}
          <div className="navbar-cart__quantity">
            {cartItem.reduce((total, current) => total + current.quantity, 0)}
          </div>
        </Link>
      </div>

      {/* Mobile modal  */}
      <div className="navbar-mobile__modal" style={modal ? displayModal : null}>
        <div className="navbar-mobile__close" onClick={closeModal}>
          <i class="far fa-times-circle"></i>
        </div>
        <ul className="navbar-mobile__list">
          <li onClick={closeModal}>
            <Link to="/">Trang chủ</Link>
          </li>
          <li onClick={closeModal}>
            <Link to="/products">Sản phẩm</Link>
          </li>
          <li onClick={closeModal}>
            <Link to="/funtouchOs">FuntouchOS</Link>
          </li>
          <li onClick={closeModal}>
            <Link to="/explore">Khám phá</Link>
          </li>
          <li onClick={closeModal}>
            <Link to="/support">Hỗ trợ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItem: state.cartReducer.cart,
});

export default connect(mapStateToProps)(Navbar);
