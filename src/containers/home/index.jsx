import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedInReducer, isSearchReducer } from "../../features/navbarSlice";
import { fetchMovies } from "../../features/homeSlice";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(isLoggedInReducer());
  dispatch(isSearchReducer());
  const navValues = useSelector((state) => state.navbar);
  const page = useSelector((state) => state.home.page);
  const totalPages = useSelector((state) => state.home.totalPages);
  const movies = useSelector((state) => state.home.movies);
  const heading = useSelector((state) => state.home.heading);
  console.log(totalPages);

  useEffect((page) => {
    fetchPopularMovies(page);
  }, []);

  const fetchPopularMovies = () => {
    dispatch(fetchMovies(page));
  };

  return (
    <div>
      <Navbar isLoggedIn={navValues.isLoggedIn} isSearch={navValues.isSearch} />
      <Banner />
      <div className="home-wrapper">
        <h1>{heading}</h1>
        <div className="card-row">
          {movies.map((movie, index) => {
            return <Card key={index} movie={movie} />;
          })}
        </div>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Home;
