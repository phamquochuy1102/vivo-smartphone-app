import React from "react";
import Navbar from "./../Components/Navbar/Navbar";
import Footer from "./../Components/Footer/Footer";
import ProductBanner from "../Components/ProductBanner/ProductBanner";
import ProductsList from "../Components/ProductsList/ProductsList";

const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductBanner />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Products;
