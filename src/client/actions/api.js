import 'es6-promise';
import 'isomorphic-fetch';

let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage');
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

export const register = (username, password) => {
  console.log('registering: ', username, password);
  return true;
};

export const login = (username, password) => {
  console.log('logging in: ', username, password);
  return fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  })
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log('Something: ', data);
    localStorage.token = data.token;
    return Promise.resolve(true);
  })
  .catch((error) => {
    console.log('error: ', error);
  });
};

export const userLogout = () => {
  console.log('logging out');
  fetch('/auth/logout', {
    method: 'POST',
  })
      .then((result) => {
        return result.json();
      })
      .then(() => {
        return Promise.resolve(true);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
};
