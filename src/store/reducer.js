import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import CounterReducer from '../modules/counter/reducer';
import LoginReducer from '../modules/login/reducer';

export default combineReducers({
  routing,
  counter: CounterReducer,
  session: LoginReducer
});
