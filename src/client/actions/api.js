import 'es6-promise';
import 'isomorphic-fetch';
import { browserHistory } from 'react-router';

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

export const login = (username, password) => fetch('/auth/login', {
  method: 'POST',
  body: JSON.stringify({ username, password }),
  headers: new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
})
  .then(result => result.json())
  .then((data) => {
    localStorage.token = data.token;
    return Promise.resolve(true);
  })
  .catch(error => Promise.reject(error));

export const userLogout = () => {
  fetch('/auth/logout', {
    method: 'POST',
  })
      .then(result => result.json())
      .then(() => {
        Promise.resolve(true);
      })
      .catch((error) => {
        Promise.reject(error);
      });
};

export const authCheck = (nextState, replace, callback) => {
  fetch('/auth/check', {
    method: 'POST',
    headers: { AUTHORIZATION: `${localStorage.token}` },
  })
  .then((result) => {
    if (result.status !== 200) {
      replace('/');
    }
    callback();
  });
};

export const returnVerify = () => {
  // TODO implement this to verify a returning user with a JWT
  return fetch('/auth/check', {
    method: 'POST',
    headers: { AUTHORIZATION: `${localStorage.token}` },
  })
  .then((result) => {
    if (result.status !== 200) {
      delete localStorage.token;
      browserHistory.push('/');
      return { username: null };
    }
    return result.json();
  })
  .then((decodedUser) => {
    console.log(`decodedUser: ${JSON.stringify(decodedUser)}`);
    return decodedUser;
  })
  .catch((error) => {
    console.log(error);
  });
};
