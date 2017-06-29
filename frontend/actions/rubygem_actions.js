import * as RubygemAPIUtil from '../util/rubygem_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_GEM_SEARCH_RESULTS";

export const receiveGemSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const fetchGemSearchResults = () => {
  return (dispatch) => {
    const success = (searchResults) => {
      return dispatch(receiveGemSearchResults(searchResults));
    };

    return RubygemAPIUtil.fetchGemSearchResults(keyword).then(success);
  };
};
