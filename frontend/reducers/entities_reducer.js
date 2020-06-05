import { combineReducers } from 'redux';

import users from './users_reducer';
import cons from './cons_reducer';
import boards from './boards_reducer';
import follows from './follows_reducer';

export default combineReducers({
  users,
  cons,
  boards,
  follows,
});
