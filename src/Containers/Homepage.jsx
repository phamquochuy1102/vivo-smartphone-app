import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Navbar from "../Components/Navbar/Navbar";
import TypeSeries from "../Components/TypeSeries/TypeSeries";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <TypeSeries />
    </div>
  );
};

export default Homepage;
