import { connect } from 'react-redux';
import { fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';

import Favorites from './favorites';

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteData.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
    deleteFavorite: (id) => dispatch(deleteFavorite(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
