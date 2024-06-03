import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import MovieList from './MovieList';

const HomePage = ({ searchTerm, setSearchTerm, addFavorite, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.myjson.online/v1/records/9311718e-6130-416f-a235-f884b270f99d');
        setMovies(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="home-page">
       <a className="navbar-brand" href="#">Navbar GROUP:- DANIEL: ELIUD: BRIAN!</a>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MovieList searchTerm={searchTerm} addFavorite={addFavorite} favorites={favorites} movies={movies} />
    </div>
  );
};

export default HomePage;