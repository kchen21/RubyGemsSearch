import { RECEIVE_FAVORITES } from '../actions/favorite_actions';
import { merge } from 'lodash';

const _defaultState = {
  favorites: {}
};

const favoriteDataReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_FAVORITES:
      newState.favorites = action.favorites;
      return newState;
    default:
      return state;
  }
};

export default favoriteDataReducer;
