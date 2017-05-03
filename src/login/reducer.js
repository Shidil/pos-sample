
let getInitialState = () => {
  return {
    loggedIn: false,
    redirectUrl: null,
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

  default:
    return state;
  }
};
