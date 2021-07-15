import React from "react";
import "./ProductBanner.scss";

const ProductBanner = () => {
  return (
    <div>
      <picture className="product-banner">
        <source
          media="(max-width:767px)"
          srcset="https://www.vivosmartphone.vn/uploads/home/banner-x50-pro/x50-series-2-500x720.jpg"
        />
        <img src="./assets/img/product-banner.jpg" alt="VIVO" />
      </picture>
    </div>
  );
};

export default ProductBanner;
