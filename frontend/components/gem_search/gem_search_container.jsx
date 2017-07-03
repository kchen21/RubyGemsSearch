import { connect } from 'react-redux';
import { fetchGemSearchResults } from '../../actions/rubygem_actions';

import GemSearch from './gem_search';

const mapStateToProps = (state) => {
  return {
    searchResults: state.rubygemData.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGemSearchResults: (keyword) => dispatch(fetchGemSearchResults(keyword))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GemSearch);
