import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.image} alt={`${movie.title} poster`} />
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
};

export default MovieItem;