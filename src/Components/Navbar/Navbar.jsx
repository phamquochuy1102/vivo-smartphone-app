import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <img
          src="https://www.vivosmartphone.vn/themes/vivo/img/logo.svg"
          alt="logo"
        />
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
      <div className="navbar-search">
        <i class="fas fa-search"></i>
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

export default Navbar;
