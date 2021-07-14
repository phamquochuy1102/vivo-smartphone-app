import React from "react";
import Carousel from "../Components/Carousel/Carousel";
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
    </div>
  );
};

export default Homepage;
