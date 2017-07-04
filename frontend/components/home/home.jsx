import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderSearchLink = () => {
      if (this.props.location.pathname === "/search") {
        return <Link className="link-to-search active-page" to="/search">Search</Link>
      } else {
         return <Link className="link-to-search" to="/search">Search</Link>
      }
    };

    const renderFavoritesLink = () => {
      if (this.props.location.pathname === "/favorites") {
        return <Link className="link-to-favorites active-page" to="/favorites">Favorites</Link>
      } else {
        return <Link className="link-to-favorites" to="/favorites">Favorites</Link>
      }
    }

    return (
      <div className="home">
        <aside className="home-aside">
          <img className="map" src={ window.assets.map } />
          <img className="teachable-logo" src={ window.assets.teachable_logo } />
          { renderSearchLink() }
          { renderFavoritesLink() }
        </aside>
        <div className="home-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
