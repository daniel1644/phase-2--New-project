// MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = ({ searchTerm, addFavorite, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.myjson.online/v1/records/78a0a148-bbb0-4b2f-8038-e01c92b6a9d7');
        setMovies(response.data.movies || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchMoviesBySearchTerm = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.myjson.online/v1/records/78a0a148-bbb0-4b2f-8038-e01c92b6a9d7');
        const filteredMovies = response.data.movies.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMovies(filteredMovies);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    const debounceFetch = setTimeout(() => {
      if (searchTerm) {
        fetchMoviesBySearchTerm();
      }
    }, 300);

    return () => clearTimeout(debounceFetch);
  }, [searchTerm]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            isFavorite={favorites.some(fav => fav.id === movie.id)}
            addFavorite={addFavorite}
          />
        ))
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
};

export default MovieList;
