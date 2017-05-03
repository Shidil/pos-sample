
let getInitialState = () => {
  return {
    loggedIn: false,
    redirectUrl: '/sell',
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

  default:
    return state;
  }
};
