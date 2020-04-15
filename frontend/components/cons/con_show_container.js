import { connect } from 'react-redux';
import ConShow from './con_show';
import { fetchCon, editCon, createCon } from '../../actions/cons_actions';
import { withRouter } from "react-router-dom";
// import { openModal } from '../../actions/modal_actions'
// import { fetchAllBoards } from '../../actions/board_actions';

const msp = (state, ownProps) => {
  const pin = state.entities.pins[ownProps.match.params.id];

  // let board;
  let author;
  // let boards;
  if (pin) {
    // board = state.entities.boards[pin.board_id];
    // boards = state.entities.boards;
    author = state.entities.users[con.author_id];
  } else {
    // board = {};
    // boards = {};
    author = {};
  }


  return { pin, board, author, boards }
}

const mdp = dispatch => ({
  // openModal: (type, props) => dispatch(openModal(type, props)),
  // fetchAllBoards: () => dispatch(fetchAllBoards()),
  fetchCon: id => dispatch(fetchCon(id)),
  // editPin: pin => dispatch(editPin(pin)),
  // createPin: (pin) => {
  //   debugger
  //   dispatch(createPin(pin))
  // }

})

export default (connect(msp, mdp)(ConShow));