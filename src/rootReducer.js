import { combineReducers } from 'redux';

import shirts from './shirts/reducer';
import users from './users/reducer';
import cart from './cart/reducer';

const rootReducer = combineReducers({
  shirts,
  users,
  cart,
});

export default rootReducer;
