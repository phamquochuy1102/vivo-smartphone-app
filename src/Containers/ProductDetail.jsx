import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ProductDetailOverview from "../Components/ProductDetailOverview/ProductDetailOverview";
import ProductSpecifications from "../Components/ProductSpecifications/ProductSpecifications";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <ProductDetailOverview />
      <ProductSpecifications />
      <Footer />
    </div>
  );
};

export default ProductDetail;
