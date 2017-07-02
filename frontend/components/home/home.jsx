import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <aside className="home-aside">
          <img className="map" src={ window.assets.map } />
          <img className="teachable-logo" src={ window.assets.teachable_logo } />
          <Link className="link-to-search" to="/search">Search</Link>
          <Link className="link-to-favorites" to="/favorites">Favorites</Link>
        </aside>
        <div className="home-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Home;
