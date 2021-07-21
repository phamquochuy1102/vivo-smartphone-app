import React, { useEffect } from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { login } from "../../redux/actions/userAction";
import "./Login.scss";

const Login = ({ userInfo, errorMessage, loading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push({
        pathname: "/",
      });
    }
  }, [userInfo]);

  return (
    <div className="login">
      <form className="loginContainer" onSubmit={handleSubmit}>
        <h1>ĐĂNG NHẬP</h1>
        {loading && (
          <LoadingOverlay active={true} spinner={true}></LoadingOverlay>
        )}
        {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
        <label htmlFor="">Email của bạn</label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Mật khẩu</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btnContainer" type="submit">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userReducer.userInfo,
  errorMessage: state.userReducer.error,
  loading: state.userReducer.loading,
});

export default connect(mapStateToProps)(Login);
