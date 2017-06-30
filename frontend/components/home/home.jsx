import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img className="map" src={ window.assets.map } />
      <img className="teachable-logo" src={ window.assets.teachable_logo } />
      <Link className="link-to-search" to="/search">Search</Link>
      <Link className="link-to-favorites" to="/favorites">Favorites</Link>
    </div>
  );
};

export default Home;
