import React, { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <MovieList searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;