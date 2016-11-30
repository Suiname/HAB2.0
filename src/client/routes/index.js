import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from './../components/Login';

export default (
  <Route path='/'>
    <IndexRoute component={Login} />
  </Route>
);
