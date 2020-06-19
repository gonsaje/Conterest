import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, fetchAllBoards } from '../../actions/board_actions';
import {fetchAllCons} from "../../actions/cons_actions";



const msp = (state, ownProps) => {
  const board = state.entities.boards[ownProps.match.params.id];
  const cons = Object.values(state.entities.cons).filter(con => con.board_id === board.id);

  return { board, cons }
}

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchAllCons: () => dispatch(fetchAllCons()),
  fetchAllBoards: () => dispatch(fetchAllBoards())
});

export default connect(msp, mdp)(BoardShow);
