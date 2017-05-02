import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import AppReducer from './redux/reducer';

export default combineReducers({
  routing,
  app: AppReducer
});
