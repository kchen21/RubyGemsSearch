import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, hashHistory, Redirect } from 'react-router-dom';
import Home from './home/home';
import GemSearchContainer from './gem_search/gem_search_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <BrowserRouter history={ hashHistory }>
        <redirect from="/" to="search" />
        <Route path="/" component={ Home }>
          <Route path="search" component={ GemSearchContainer } />
        </Route>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
