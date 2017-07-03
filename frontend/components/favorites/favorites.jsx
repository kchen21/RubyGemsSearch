import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {};
    };
  }

  componentDidMount() {
    this.props.fetchFavorites();
    this.setState({
      favorites: this.props.favorites
    });
  }

  render() {
    function renderFavoritesList(favorites) {
      let favoritesList = [];

      for (let gemName in favorites) {
        let gemInfo = favorites[gemName];
        favoritesList.push(
          <li key={ gemName }>
            <a href={ gemInfo.link }>{ gemName }</a>
          </li>
        );
      }

      return favoritesList;
    }

    return (
      <h1>Your Favorite Gems</h1>
      <ul>
        { renderFavoritesList() }
      </ul>
    );
  }
}
