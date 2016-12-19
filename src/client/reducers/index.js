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
const leagueState = (state = { leagueName: '', team1: '', maxPlayers: 0 }, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return { leagueName: action.leagueName, team1: action.team1, maxPlayers: action.maxPlayers };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  routing: routerReducer,
  appState,
  leagueState,
});

export default rootReducer;

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
