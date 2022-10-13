import React from "react";

import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

const Login = () => {
  const navValues = useSelector((state) => state.navbar);
  return (
    <>
      <Navbar isLoggedIn={navValues.isLoggedIn} isSearch={navValues.isSearch} />
      <h1>Login component</h1>
    </>
  );
};

export default Login;
