import { RECEIVE_SEARCH_RESULTS } from '../actions/rubygem_actions';
import { merge } from 'lodash';

const _defaultState = {
  searchResults: {}
};

const rubygemDataReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState.searchResults = action.searchResults;
      return newState;
    default:
      return state;
  }
};

export default rubygemDataReducer;
