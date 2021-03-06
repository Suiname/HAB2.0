import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from './../components/Login';
import League from './../components/League';
import { authCheck } from '../actions/api';

export default (
  <Route path="/">
    <IndexRoute component={Login} />
    <Route path="/main" component={League} onEnter={authCheck} />
  </Route>
);
