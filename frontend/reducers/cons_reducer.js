import { RECEIVE_CONS, RECEIVE_CON, DELETE_CON } from '../actions/cons_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONS:
      return action.errors;
    case RECEIVE_CON:
      return [];
    case DELETE_CON:
      return [];
    default:
      return state;
  }
};