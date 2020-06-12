
import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';
import { RECEIVE_CON } from '../actions/cons_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      return Object.assign({}, { [action.board.id]: action.board });
    // case REMOVE_BOARD:
    //   delete newState[action.boardId];
    //   return newState; 
    default:
      return state;
  }
}

export default boardsReducer;