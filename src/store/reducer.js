import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import Counter from '../counter/reducer';

export default combineReducers({
  routing,
  counter: Counter
});
