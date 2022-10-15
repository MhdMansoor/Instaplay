import React from "react";
import banner from "../../assets/images/banner.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banner-image" />
    </div>
  );
};

export default Banner;
