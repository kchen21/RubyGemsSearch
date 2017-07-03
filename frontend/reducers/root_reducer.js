import { combineReducers } from 'redux';
import rubygemData from './rubygem_data_reducer';
import favoriteData from './favorite_data_reducer';

const rootReducer = combineReducers({
  rubygemData,
  favoriteData
});

export default rootReducer;
