import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import "../../styles/common.css";
import axios from "axios";
import { authenticateUser } from "../../features/loginSlice";
import { toast } from "react-toastify";

const Login = () => {
  Cookies.remove("movie_token");
  const navValues = useSelector((state) => state.navbar);
  let token = useSelector((state) => state.user.token);

  useEffect(() => {
    redirectUser();
  }, [token]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    } else {
      getToken();
    }
  };

  const getToken = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=8ec065dc5c7fd191cd99ead2b741b51f"
    );
    let token = response.data.request_token;
    auth(token);
  };

  const auth = (token) => {
    let authObj = { ...formValues, request_token: token };
    dispatch(authenticateUser(authObj));
  };

  const redirectUser = () => {
    if (token !== null) {
      toast.success("Login successfull!");
      Cookies.set("movie_token", token);
      navigate("/home");
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
