import React from 'react';

const MovieCard = ({ movie, isFavorite, addFavorite }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={`${movie.name} poster`} />
      <h2>{movie.name}</h2>
      <p>Genre: {movie.genre}</p>
      <button onClick={() => addFavorite(movie)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;

