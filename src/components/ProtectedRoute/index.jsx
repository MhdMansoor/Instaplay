import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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
