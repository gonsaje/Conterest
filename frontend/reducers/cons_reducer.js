import { RECEIVE_CONS, RECEIVE_CON, DELETE_CON } from '../actions/cons_actions';

const consReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONS:
      return action.cons;
    case RECEIVE_CON:
      return Object.assign({}, state, { [action.con.id]: action.con });
    case DELETE_CON:
      return null;
    default:
      return state;
  }
};

export default consReducer;
