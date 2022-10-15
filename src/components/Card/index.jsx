import React from "react";
import play from "../../assets/images/play.png";
import "./card.css";

const Card = ({ movie }) => {
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
          alt="movie-poster-image"
        />
      </div>
      <div className="card-content">
        <div>
          <h3>
            {movie.title.substring(0, 25)}
            {movie.title.length > 25 && "..."}
          </h3>
          <p>{movie.vote_average}/10</p>
        </div>
        <div className="play-icon">
          <img src={play} alt="play-icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
