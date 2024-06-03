import React from 'react'; 

const MovieCard = ({ movie, isFavorite, addFavorite }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={`${movie.title} poster`} />
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <button onClick={() => addFavorite(movie)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;