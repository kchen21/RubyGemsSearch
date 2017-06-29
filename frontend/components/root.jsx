import React rom 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import GemSearchContainer from './gem_search/gem_search_container';
// import FavoritesContainer from './favorites/favorites_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ GemSearchContainer }>
          // <Route path="favorites" component={FavoritesContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
