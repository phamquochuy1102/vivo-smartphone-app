import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CartItem from "../Components/CartItem/CartItem";

const ShoppingCart = () => {
  return (
    <div>
      <Navbar />
      <CartItem />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
