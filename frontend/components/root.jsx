import React rom 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import HomeContainer from './home/home_container';
import GemSearchContainer from './gem_search/gem_search_container';
// import FavoritesContainer from './favorites/favorites_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Redirect from="/" to "search" />
        <Route path="/" component={ HomeContainer }>
          <Route path="search" component={ GemSearchContainer } />
          // <Route path="favorites" component={ FavoritesContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
