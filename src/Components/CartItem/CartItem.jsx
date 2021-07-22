import React from "react";
import { connect } from "react-redux";
import "./CartItem.scss";
import { removeFromCart } from "../../redux/actions/cartAction";

const CartItem = ({ cartItem, removeFromCart }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="cartItem-list">
      <h3>Giỏ hàng</h3>
      {cartItem.length !== 0 ? (
        cartItem.map((item) => (
          <div key={item.id} className="cartItem-wrapper">
            <div className="cartItem-info">
              <div className="cartItem-info__image">
                <img src={item.image} alt="cart item" />
              </div>
              <div>
                <p className="cartItem-info__name">Điện thoại {item.name}</p>
                <p>
                  <span className="price">
                    Đơn giá: {numberWithCommas(item.price)}đ{" "}
                  </span>{" "}
                  <span className="quantity">Số lượng: {item.quantity}</span>
                  <span className="intoMoney">
                    Thành tiền: {numberWithCommas(item.price * item.quantity)}đ
                  </span>
                </p>
              </div>
            </div>
            <div onClick={() => removeFromCart(item.id)}>
              <i class="far fa-trash-alt"></i>
            </div>
          </div>
        ))
      ) : (
        <div className="cart-empty">
          <img src="./assets/img/cart is empty.png" alt="empty cart" />
        </div>
      )}

      {cartItem.length !== 0 ? (
        <div className="order">
          <h4>
            <span>Tổng cộng: </span>
            {numberWithCommas(
              cartItem.reduce(
                (total, current) => total + current.price * current.quantity,
                0
              )
            )}
            đ{" "}
          </h4>
          <button>Mua hàng</button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItem: state.cartReducer.cart,
});

export default connect(mapStateToProps, { removeFromCart })(CartItem);
