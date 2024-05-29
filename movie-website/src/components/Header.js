import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <h1>Movie Website</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
};

export default Header;
