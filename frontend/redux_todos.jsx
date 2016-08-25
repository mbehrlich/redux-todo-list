import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {createTodo} from './actions/todo_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  window.createTodo = createTodo;
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, content);
});
