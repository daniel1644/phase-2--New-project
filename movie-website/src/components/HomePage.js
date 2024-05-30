import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Movie App</h1>
      <p>Explore and manage your favorite movies.</p>
      <Link to="/movies">
        <button>Go to Movies</button>
      </Link>
    </div>
  );
};

export default HomePage;
