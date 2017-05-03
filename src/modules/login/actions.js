export const loginUser = (username, password) => {
  return {
    type: 'LOGIN_USER',
    username,
    password
  };
};
