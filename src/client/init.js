import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';

import routes from './routes';
import configureStore from './configureStore';

injectTapEventPlugin();

const store = configureStore(0);

render((
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
