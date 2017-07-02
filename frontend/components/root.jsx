import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory, Redirect } from 'react-router-dom';
import Home from './home/home';
import GemSearchContainer from './gem_search/gem_search_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Home>
          <Route path='/search' component={ GemSearchContainer } />
        </Home>
      </Router>
    </Provider>
  );
};

export default Root;
