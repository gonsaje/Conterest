import { combineReducers } from 'redux';

import users from './users_reducer';
import cons from './cons_reducer';

export default combineReducers({
  users,
  cons,
  
});
