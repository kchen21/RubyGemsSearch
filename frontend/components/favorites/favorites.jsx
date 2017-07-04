import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {}
    };

    this.handleStarClick = this.handleStarClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchFavorites();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      favorites: newProps.favorites
    });
  }

  handleStarClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteFavorite(id);
    };
  }

  render() {
    const renderFavoritesList = (favorites) => {
      let favoritesList = [];

      for (let gemName in favorites) {
        let gemInfo = favorites[gemName];
        favoritesList.push(
          <li className="favorite-list-item" key={ gemName }>
            <button onClick={ this.handleStarClick(gemInfo.id) }>
              <img src={ window.assets.star_blue } />
            </button>
            <a href={ gemInfo.link }>{ gemName }</a>
          </li>
        );
      }

      return favoritesList;
    }

    return (
      <div className="favorites">
        <h1>Your Favorite Gems</h1>
        <ul className="favorite-list">
          { renderFavoritesList(this.state.favorites) }
        </ul>
      </div>
    );
  }
}

export default Favorites;
