import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  // debugger
  const board = state.entities.boards[ownProps.match.params.id];
  // debugger
  const pins = Object.values(state.entities.pins).filter(pin => pin.board_id === board.id);
  return { board, pins }
}

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  openModal: (type, props) => dispatch(openModal(type, props))
});

export default connect(msp, mdp)(BoardShow);
