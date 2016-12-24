import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const appState = (state = { loggedIn: false, username: null }, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { loggedIn: action.newAuthState, username: action.username, userID: action.userID };
    case 'RETURNING':
      return { loggedIn: state.loggedIn, username: action.username, userID: action.userID };
    default:
      return state;
  }
};
const leagueState = (state = { leagueName: '', team1: '', maxPlayers: 0, leagues: [] }, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return { leagueName: action.leagueName, team1: action.team1, maxPlayers: action.maxPlayers, leagues: state.leagues };
    case 'LEAGUE_LIST':
      return state;
    case 'RETURN_LEAGUES':
      return { leagueName: state.leagueName, team1: state.team1, maxPlayers: state.maxPlayers, leagues: action.leagues };
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
