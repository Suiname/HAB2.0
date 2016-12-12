export const onIncrement = () => ({ type: 'INCREMENT' });
export const onDecrement = () => ({ type: 'DECREMENT' });
export const onIncrementAsync = () => ({ type: 'INCREMENT_ASYNC' });
export const sendingRequest = (sending) => ({ type: 'SENDING_REQUEST', sending });
export const loginRequest = (data) => ({ type: 'LOGIN_REQUEST', data });
export const logout = () => ({ type: 'LOGOUT' });
export const setAuthState = (newAuthState) => ({ type: 'SET_AUTH', newAuthState });
