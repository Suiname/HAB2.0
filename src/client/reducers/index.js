import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const appState = (state = { loggedIn: false, username: null }, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { loggedIn: action.newAuthState, username: action.username };
    case 'RETURNING':
      return { loggedIn: state.loggedIn, username: action.username };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  routing: routerReducer,
  appState,
});

export default rootReducer;

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};
