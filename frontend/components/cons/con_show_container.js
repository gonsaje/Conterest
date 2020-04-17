import { connect } from 'react-redux';
import ConShow from './con_show';
import { fetchCon} from '../../actions/cons_actions';
import { withRouter } from "react-router-dom";
// import { openModal } from '../../actions/modal_actions'
// import { fetchAllBoards } from '../../actions/board_actions';

const msp = (state, ownProps) => {
  const con = state.entities.cons[ownProps.match.params.id];
  let author;
  if (con) {
    author = state.entities.users[con.author_id];
  } else {
    author = {};
  }


  return { con, author};
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