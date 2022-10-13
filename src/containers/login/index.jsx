import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import "../../styles/common.css";

const Login = () => {
  const navValues = useSelector((state) => state.navbar);

  const [formError, setFormError] = useState({
    username: false,
    password: false,
  });
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormError({ ...formError, [name]: false });
  };

  const submitHandler = () => {
    if (formValues.username === "") {
      setFormError({ ...formError, username: true });
      setMessage("Username is required");
    } else if (formValues.password === "") {
      setFormError({ ...formError, password: true });
      setMessage("Password is required");
    }
  };

  return (
    <div className="login-wrapper">
      <Navbar isLoggedIn={navValues.isLoggedIn} isSearch={navValues.isSearch} />
      <div className="background-wrapper">
        <div className="form-card-wrapper">
          <h1>Sign in</h1>
          <p>Sign in to your Self Service Portal</p>
          <div className="form-card">
            <div className="form-input-wrapper">
              <input
                type="text"
                className={
                  formError.username
                    ? "form-control border-red"
                    : "form-control"
                }
                placeholder="Username"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              {formError.username && <p className="error">{message}</p>}
            </div>
            <div className="form-input-wrapper">
              <input
                type="text"
                className={
                  formError.password
                    ? "form-control border-red"
                    : "form-control"
                }
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {formError.password && <p className="error">{message}</p>}
            </div>
            <button className="btn-submit" onClick={submitHandler}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
