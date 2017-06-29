import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img src={ window.assets.map } />
      <img src={ window.assets.teachable_logo } />
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Home;
