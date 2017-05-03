import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import CounterReducer from '../counter/reducer';
import LoginReducer from '../login/reducer';

export default combineReducers({
  routing,
  counter: CounterReducer,
  session: LoginReducer
});
