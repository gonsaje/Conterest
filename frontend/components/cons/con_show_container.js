import { connect } from 'react-redux';
import ConShow from './con_show';
import {editCon, fetchCon} from '../../actions/cons_actions';
import { withRouter } from "react-router-dom";
import { fetchBoard, fetchAllBoards } from '../../actions/board_actions';
import {fetchUser, fetchAllUsers} from '../../actions/user_actions'


const msp = (state, ownProps) => {

  const con = state.entities.cons[ownProps.match.params.id];
  const currentUser = state.session.currentUser;
  const boards = state.entities.boards;
  let board;
  if (con) {
    board = state.entities.boards[con.board_id]
  }
  return {con, currentUser, boards, board};
}

const mdp = dispatch => {

  return({
    fetchCon: con => dispatch(fetchCon(con)),
    fetchBoard: boardId => dispatch(fetchCon(boardId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: user_id => dispatch(fetchUser(user_id)),
    fetchAllBoards: () => dispatch(fetchAllBoards()),
    editCon: con => dispatch(editCon(con)),
  })
  
}

export default (connect(msp, mdp)(ConShow));