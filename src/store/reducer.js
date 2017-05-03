import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import SalesReducer from '../modules/sales/reducer';
import LoginReducer from '../modules/login/reducer';

export default combineReducers({
  routing,
  sales: SalesReducer,
  session: LoginReducer
});
