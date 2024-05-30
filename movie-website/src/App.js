import React, { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import FavoriteList from './components/FavoriteList';
import './styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(fav => fav.id !== movie.id));
  };

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <MovieList searchTerm={searchTerm} addFavorite={addFavorite} favorites={favorites} />
        <FavoriteList favorites={favorites} removeFavorite={removeFavorite} />
      </main>
    </div>
  );
}

export default App;
