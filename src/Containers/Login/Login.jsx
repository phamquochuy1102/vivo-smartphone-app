// import React, { useEffect } from "react";
// import { useState } from "react";
// import Homepage from "../Homepage";
// import "./Login.scss";

// const Login = () => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState(false);

//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const clearErrors = () => {
//     setEmailError("");
//     setPasswordError("");
//   };

//   return (
//     <div className="login">
//       <div className="loginContainer">
//         <label htmlFor="">Email của bạn</label>
//         <input
//           type="email"
//           autoFocus
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <p className="errorMsg">{emailError}</p>
//         <label htmlFor="">Mật khẩu</label>
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <p className="errorMsg">{passwordError}</p>
//         <div className="btnContainer">
//           {hasAccount ? (
//             <>
//               {" "}
//               <button onClick={handleLogin}>Đăng nhập</button>
//               <p>
//                 Bạn chưa có tài khoản?{" "}
//                 <span onClick={() => setHasAccount(!hasAccount)}>Đăng ký</span>
//               </p>
//             </>
//           ) : (
//             <>
//               {" "}
//               <button onClick={handleSignup}>Đăng ký</button>
//               <p>
//                 Bạn đã có tài khoản?{" "}
//                 <span onClick={() => setHasAccount(!hasAccount)}>
//                   Đăng nhập{" "}
//                 </span>
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
