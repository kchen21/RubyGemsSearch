import * as FavoriteAPIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';

export const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const fetchFavorites = () => {
  return (dispatch) => {
    const success = (favorites) => {
      return dispatch(receiveFavorites(favorites));
    };

    return FavoriteAPIUtil.fetchFavorites().then(success);
  };
};

export const createFavorite = (favorite) => {
  return (dispatch) => {
    const success = (favorites) => {
      return dispatch(receiveFavorites(favorites));
    };

    return FavoriteAPIUtil.createFavorite(favorite).then(success);
  };
};

export const deleteFavorite = (id) => {
  return (dispatch) => {
    const success = (favorites) => {
      return dispatch(receiveFavorites(favorites));
    };

    return FavoriteAPIUtil.deleteFavorite(id).then(success);
  };
};
