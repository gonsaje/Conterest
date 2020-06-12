import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';


const msp = (state, ownProps) => {
  // debugger
  const board = state.entities.boards[ownProps.match.params.id];
  // debugger
  const cons = Object.values(state.entities.cons).filter(con => con.board_id === board.id);
  return { board, cons }
}

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
});

export default connect(msp, mdp)(BoardShow);
