import React from "react";
import instaLogo from "../../assets/images/instaLogo.png";
import search from "../../assets/images/search.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isLogOutReducer } from "../../features/loginSlice";
import { logReducer, searchReducer } from "../../features/navbarSlice";
import "./navbar.css";

const Navbar = ({ isLoggedIn, isSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(isLogOutReducer());
    dispatch(logReducer());
    dispatch(searchReducer());
    toast.success("logged out successfully");
    navigate("/");
  };

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
        {isLoggedIn && <p onClick={logOutUser}>Logout</p>}
      </div>
    </div>
  );
};

export default Navbar;
