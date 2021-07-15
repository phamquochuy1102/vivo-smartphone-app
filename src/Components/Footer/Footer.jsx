import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-list">
        <div className="footer-list__item">
          <ul>
            <li>
              <Link to="#">Sản phẩm</Link>
            </li>
            <li>
              <Link to="#">Dòng X</Link>
            </li>
            <li>
              <Link to="#">Dòng V</Link>
            </li>
            <li>
              <Link to="#">Dòng S</Link>
            </li>
            <li>
              <Link to="#">Dòng Y</Link>
            </li>
            <li>
              <Link to="#">Dòng U</Link>
            </li>
          </ul>
        </div>
        <div className="footer-list__item">
          <ul>
            <li>
              <Link to="#">Funtouch OS</Link>
            </li>
            <li>
              <Link to="#">Hệ thống cửa hàng</Link>
            </li>
            <li>
              <Link to="#">Khám phá</Link>
            </li>
          </ul>
        </div>
        <div className="footer-list__item">
          <ul>
            <li>
              <Link to="#">Hỗ trợ</Link>
            </li>
            <li>
              <Link to="#">Chăm sóc khách hàng</Link>
            </li>
            <li>
              <Link to="#">Cập nhật hệ thống</Link>
            </li>
            <li>
              <Link to="#">Câu hỏi thường gặp</Link>
            </li>
            <li>
              <Link to="#">Chính sách bảo mật</Link>
            </li>
          </ul>
        </div>
        <div className="footer-list__item">
          <ul>
            <li>
              <Link to="#">Về vivo</Link>
            </li>
            <li>
              <Link to="#">Tuyển dụng</Link>
            </li>
            <li>
              <Link to="#">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-contact__info">
          <h3>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VÀ ĐẦU TƯ NHUẬN TÍN</h3>
          <p>
            <span>Địa chỉ:</span> Tầng 01, Cao Ốc văn phòng Saigon Prime
            <br /> 107-109-111 Nguyễn Đình Chiểu, Phường 06, Quận 3, Thành phố
            Hồ Chí Minh.
          </p>
          <p>
            <span>Điện thoại:</span> 028.6683.4665
          </p>
          <p>
            Giấy chứng nhận đăng ký kinh doanh: Số 0316155183 do Sở Kế Hoạch &
            Đầu Tư TP. Hồ Chí Minh cấp lần đầu ngày 24/02/2020.
          </p>
        </div>
        <div className="footer-contact__bct">
          <img
            src="./assets/img/logo-da-thong-bao-website-voi-bo-cong-thuong.png"
            alt="bct"
          />
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright © 2020 Nhuan Tin Services Trading and Investment Co., Ltd.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
