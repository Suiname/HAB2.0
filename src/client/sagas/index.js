import { takeEvery, delay } from 'redux-saga';
import { put, call, fork, race, take } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { register, login, userLogout, returnVerify, createLeague } from '../actions/api';

// Our worker Saga: will perform the async increment task
export function *incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function *watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function *authorize({ username, password, isRegistering }) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: 'SENDING_REQUEST', sending: true });

  // We then try to register or log in the user, depending on the request
  try {
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(register, username, password);
    } else {
      response = yield call(login, username, password);
    }

    return response;
  } catch (error) {
    console.log('Error in Saga');
    // If we get an error we send Redux the appropiate action and return
    yield put({ type: 'REQUEST_ERROR', error: error.message });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: 'SENDING_REQUEST', sending: false });
  }
}

export function *logout() {
  // We tell Redux we're in the middle of a request
  yield put({ type: 'SENDING_REQUEST', sending: true });

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    const response = yield call(userLogout);
    yield put({ type: 'SENDING_REQUEST', sending: false });

    return response;
  } catch (error) {
    yield put({ type: 'REQUEST_ERROR', error: error.message });

    return false;
  }
}

export function *loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take('LOGIN_REQUEST');
    const { username, password } = request.data;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, { username, password, isRegistering: false }),
      logout: take('LOGOUT'),
    });

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put({ type: 'SET_AUTH', newAuthState: true, username }); // User is logged in (authorized)
      console.log('Login completed'); // Go to dashboard page
      browserHistory.push('/main');
      // If `logout` won...
    } else if (winner.logout) {
      // ...we send Redux appropiate action
      yield put({ type: 'SET_AUTH', newAuthState: false, username: null }); // User is not logged in (not authorized)
      console.log('Logout called');
      // Go to root page
    }
  }
}

export function *logoutFlow() {
  while (true) {
    yield take('LOGOUT');
    yield put({ type: 'SET_AUTH', newAuthState: false, username: null });

    yield call(logout);
    browserHistory.push('/');
  }
}

export function *returningUser() {
  while (true) {
    yield take('RETURNING');
    const user = yield call(returnVerify);
    console.log('User User: ', user);
    yield put({ type: 'SET_AUTH', newAuthState: true, username: user.username, userID: user.userID });
  }
}

export function *leagueFlow() {
  while (true) {
    const leagueInfo = yield take('SUBMIT');
    const { leagueName, team1, maxPlayers } = leagueInfo.leagueState;
    yield call(createLeague, { leagueName, team1, maxPlayers });
  }
}

export default function *rootSaga() {
  yield [
    watchIncrementAsync(),
    fork(loginFlow),
    fork(logoutFlow),
    fork(returningUser),
    fork(leagueFlow),
  ];
}
