import { createStore, applyMiddleware } from 'redux';
import rubygemDataReducer from '../reducers/rubygem_data_reducer';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(rubygemDataReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
