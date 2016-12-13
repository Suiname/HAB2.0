import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import configureStore from './store/configureStore';
import './_static/css/main.css';

injectTapEventPlugin();

const store = configureStore({ loggedIn: false, username: null });

render((
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
