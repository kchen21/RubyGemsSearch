import { connect } from 'react-redux';
import { fetchFavorites, createFavorite, deleteFavorite } from '../../actions/favorite_actions';

import Favorites from './favorites';

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteData.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
