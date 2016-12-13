import 'es6-promise';
import 'isomorphic-fetch';

export const register = (username, password) => {
  console.log('registering: ', username, password);
  return true;
};

export const login = (username, password) => {
  console.log('logging in: ', username, password);
  fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  })
  .then((result) => {
    console.log('Result:', result);
  })
  .catch((error) => {
    console.log("error: ", error);
  })
  return true;
};

export const userLogout = () => {
  console.log('logging out');
  return true;
};
