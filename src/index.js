import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import store from 'store/configure';
import history from 'store/history';
import App from 'components/App';
import axios from 'axios';
import config from './config';

const { port, route } = config.api;
axios.defaults.baseURL = `http://localhost:${port}/${route}/`;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
