import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const token = Cookies.get("movie_token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      toast.error("Please login to continue");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
