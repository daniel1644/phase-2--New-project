import React from 'react';
import MovieCard from './MovieCard'; 

const FavoriteList = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorite-list">
      <h2>Favorite Movies</h2>
      {favorites.length > 0 ? (
        favorites.map((movie, index) => (
          <MovieCard key={index} movie={movie} isFavorite={true} addFavorite={removeFavorite} />
        ))
      ) : (
        <div>it will coming favorite movies</div>
      )}
    </div>
  );
};

export default FavoriteList;