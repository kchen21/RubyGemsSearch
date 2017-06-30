import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory, Redirect, Switch } from 'react-router-dom';
import Home from './home/home';
import GemSearchContainer from './gem_search/gem_search_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <div>
          <Home />
          <Route exact path="/" component={ GemSearchContainer } />
        </div>
      </Router>
    </Provider>
  );
};

export default Root;
