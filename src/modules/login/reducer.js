
let getInitialState = () => {
  return {
    loggedIn: false,
    redirectUrl: '/sell/new',
    user: null,
    sessionID: null
  };
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
  case 'NAVIGATE_TO_URL':
    return state;

  case 'SET_REDIRECT_URL':
    return {
      ...state,
      redirectUrl: action.url
    };

  case 'LOGIN_USER':
    return {
      ...state,
      loggedIn: true,
      user: action.username
    };

  case 'LOGOUT_USER':
    return {
      ...state,
      loggedIn: false,
      user: null
    };

  default:
    return state;
  }
};
