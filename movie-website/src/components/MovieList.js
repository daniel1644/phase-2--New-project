import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; 

const MovieList = ({ searchTerm, addFavorite, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const processMovieData = (data) => {
    const movies = [];
    data.forEach((categoryItem, index) => {
      if (index % 2 === 0) return;

      categoryItem.forEach((item) => {
        if (item.id && item.name && item.image) {
          const movieDetails = categoryItem.find(subItem => Array.isArray(subItem) && subItem.some(subSubItem => subSubItem.genre && subSubItem.description));
          if (movieDetails) {
            movies.push({
              ...item,
              genre: movieDetails[0].genre,
              description: movieDetails[0].description
            });
          }
        }
      });
    });
    return movies;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.myjson.online/v1/records/9311718e-6130-416f-a235-f884b270f99d');
        const processedMovies = processMovieData(response.data.data);
        console.log(response.data.data)
        setMovies(processedMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    const fetchMoviesBySearchTerm = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.myjson.online/v1/records/9311718e-6130-416f-a235-f884b270f99d');
        const processedMovies = processMovieData(response.data.data);
        const filteredMovies = processedMovies.filter(movie =>
          movie.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchMoviesBySearchTerm();
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