import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.myjson.online/v1/records/78a0a148-bbb0-4b2f-8038-e01c92b6a9d7')
      .then(response => {
        setMovies(response.data.movies || []);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-list">
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
