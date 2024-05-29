import React from 'react';
import MovieList from './components/MovieList';
// import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Website</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
