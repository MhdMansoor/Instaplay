import React from "react";
import leftArrow from "../../assets/images/prev.svg";
import rightArrow from "../../assets/images/next.svg";
import "./pagination.css";

const Pagination = ({ totalPages }) => {
  return (
    <div className="pagination">
      {/* previous button */}
      <img src={leftArrow} alt="left arrow" />

      {/* next button */}
      <img src={rightArrow} alt="right arrow" />
    </div>
  );
};

export default Pagination;
