import React from "react";
import instaLogo from "../../assets/images/instaLogo.png";
import search from "../../assets/images/search.png";

import "./navbar.css";

const Navbar = ({ isLoggedIn, isSearch }) => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <img src={instaLogo} alt="insta-logo-image" />
      </div>
      <div className="search-bar">
        {isSearch && (
          <div className="search-input">
            <input type="text" name="search" placeholder="Search movie" />
            <button className="btn-search">
              <img src={search} alt="search-icon" />
            </button>
          </div>
        )}
        {isLoggedIn && <p>Logout</p>}
      </div>
    </div>
  );
};

export default Navbar;
