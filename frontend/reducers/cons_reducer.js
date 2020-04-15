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

// import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pin_actions";
// import { RECEIVE_BOARD } from '../actions/board_actions';


// const pinsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_PIN:
//       return Object.assign({}, state, { [action.pin.id]: action.pin });
//     case RECEIVE_PINS:
//       return action.pins;
//     case REMOVE_PIN:
//       return null;
//     case RECEIVE_BOARD:
//       let newState = {};
//       action.pins.forEach(pin => {
//         newState[pin.id] = pin;
//       })
//       return newState;
//     default:
//       return state;
//   }
// };

// export default pinsReducer;