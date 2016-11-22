import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './Root';

export default (
  <Route path='/'>
    <IndexRoute component={Root} />
  </Route>
);
