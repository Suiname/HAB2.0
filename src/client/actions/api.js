export const register = (username, password) => {
  console.log('registering: ', username, password);
  return true;
};

export const login = (username, password) => {
  console.log('logging in: ', username, password);
  return true;
};

export const userLogout = () => {
  console.log('logging out');
  return true;
};
