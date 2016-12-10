import { takeEvery, delay } from 'redux-saga';
import { put, call, fork, race, take } from 'redux-saga/effects';
import { register, login } from '../actions/api';
export function * helloSaga() {
  console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function * incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function * watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}

export function * authorize({ username, password, isRegistering }) {
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
    console.log('hi');
    // If we get an error we send Redux the appropiate action and return
    yield put({ type: 'REQUEST_ERROR', error: error.message });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: 'SENDING_REQUEST', sending: false });
  }
}
