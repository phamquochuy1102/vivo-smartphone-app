import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Explore from "../Components/Explore/Explore";
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
    </div>
  );
};

export default Homepage;
