import React from "react";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedInReducer, isSearchReducer } from "../../features/navbarSlice";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(isLoggedInReducer());
  dispatch(isSearchReducer());
  const navValues = useSelector((state) => state.navbar);
  return (
    <div>
      <Navbar isLoggedIn={navValues.isLoggedIn} isSearch={navValues.isSearch} />
    </div>
  );
};

export default Home;
