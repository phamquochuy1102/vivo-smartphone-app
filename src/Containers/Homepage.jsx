import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Explore from "../Components/Explore/Explore";
import Feature from "../Components/Feature/Feature";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Technology from "../Components/Technology/Technology";
import TypeSeries from "../Components/TypeSeries/TypeSeries";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <TypeSeries />
      <Technology />
      <Explore />
      <Feature />
      <Footer />
    </div>
  );
};

export default Homepage;
