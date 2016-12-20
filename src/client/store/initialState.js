let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage');
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

export default {
  appState: {
    username: null,
    userID: null,
    loggedIn: !!localStorage.token,
  },
  leagueState: {
    leagueName: '',
    team1: '',
    maxPlayers: 0,
  },
};
