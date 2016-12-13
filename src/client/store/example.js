import 'isomorphic-fetch';

let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}

let auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  login (username, password) {
    if (auth.loggedIn()) return Promise.resolve(true)

    // Post a fake request
    return fetch.post('/login', {username, password})
      .then(response => {
        // Save token to local storage
        localStorage.token = response.token
        return Promise.resolve(true)
      })
  },
  /**
  * Logs the current user out
  */
  logout () {
    return fetch.post('/logout')
  },
  /**
  * Checks if a user is logged in
  */
  loggedIn () {
    return !!localStorage.token
  },
  /**
  * Registers a user and then logs them in
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  register (username, password) {
    // Post a fake request
    return fetch.post('/register', {username, password})
      // Log user in after registering
      .then(() => auth.login(username, password))
  },
  onChange () {}
}

export default auth;