import * as RubygemAPIUtil from '../util/rubygem_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_GEM_SEARCH_RESULTS";

export const receiveGemSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const fetchGemSearchResults = (keyword) => {
  return (dispatch) => {
    const success = (searchResults) => {
      return dispatch(receiveGemSearchResults(searchResults));
    };

    return RubygemAPIUtil.fetchGemSearchResults(keyword).then(success);
  };
};
