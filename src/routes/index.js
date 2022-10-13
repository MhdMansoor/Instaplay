import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Login from "../containers/login";
import Home from "../containers/home";
import MovieDetails from "../containers/movieDetails";
import ProtectedRoute from "../components/ProtectedRoute";

import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/home"
          element={<ProtectedRoute Component={Home} />}
        />
        <Route
          exact
          path="/details/:id"
          element={<ProtectedRoute Component={MovieDetails} />}
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </Router>
  );
};

export default AppRoutes;
