import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedInReducer, isSearchReducer } from "../../features/navbarSlice";
import { fetchMovies } from "../../features/homeSlice";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(isLoggedInReducer());
  dispatch(isSearchReducer());
  const navValues = useSelector((state) => state.navbar);
  const page = useSelector((state) => state.home.page);
  const totalPages = useSelector((state) => state.home.totalPages);
  const movies = useSelector((state) => state.home.movies);
  const loading = useSelector((state) => state.home.isLoading);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = () => {
    dispatch(fetchMovies());
  };

  return (
    <div>
      <Navbar isLoggedIn={navValues.isLoggedIn} isSearch={navValues.isSearch} />
      <Banner />
      <div className="home-wrapper">
        {loading ? <h1>Fetching popular movies...</h1> : <h1>Trending </h1>}
        <div className="card-row">
          {movies.map((movie, index) => {
            return <Card key={index} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
