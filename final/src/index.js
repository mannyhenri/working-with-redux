import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/store';
import { getInitialNotes } from './store/actions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(getInitialNotes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
