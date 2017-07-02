import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, hashHistory, Redirect } from 'react-router-dom';
import Home from './home/home';
import GemSearchContainer from './gem_search/gem_search_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Home>
          <Route path='/search' component={ GemSearchContainer } />
        </Home>
      </Router>
    </Provider>
  );
};

export default Root;
