import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { render } from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import './_static/css/main.css';

injectTapEventPlugin();

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store} >
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('root'));
