import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  window.store = store; // for testing purposes

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
