import { combineReducers } from 'redux';

import shirts from './shirts/reducer';
import users from './users/reducer';

const rootReducer = combineReducers({
  shirts,
  users,
});

export default rootReducer;
