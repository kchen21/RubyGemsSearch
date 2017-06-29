import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, hashHistory, Redirect } from 'react-router-dom';
import Home from './home/home';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <BrowserRouter history={ hashHistory }>
        <Route path="/" component={ Home }>
        </Route>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
