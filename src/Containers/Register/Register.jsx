import React, { useEffect } from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import { register } from "./../../redux/actions/userAction";
import "./Register.scss";

const Register = ({ userRegister, errorMessage, loading }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(email, password, name));
  };

  useEffect(() => {
    if (userRegister) {
      alert("Đăng ký tài khoản thành công!");
      history.push({
        pathname: "/login",
      });
    }
  }, [userRegister, history]);

  return (
    <div className="register">
      <form className="registerContainer" onSubmit={handleSubmit}>
        <h1>ĐĂNG KÝ TÀI KHOẢN</h1>

        {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
        <label htmlFor="">Họ tên</label>
        <input
          type="text"
          autoFocus
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Nguyen Van A"
        />
        <label htmlFor="">Email của bạn</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ex: user@example.com"
        />
        {loading && (
          <LoadingOverlay active={true} spinner={true}></LoadingOverlay>
        )}
        <label htmlFor="">Mật khẩu</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu của bạn"
        />

        <div className="newUser">
          <p>
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
        <div className="btnContainer" type="submit">
          <button>ĐĂNG KÝ</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.userReducer.error,
  loading: state.userReducer.loading,
  userRegister: state.userReducer.userRegister,
});

export default connect(mapStateToProps)(Register);
