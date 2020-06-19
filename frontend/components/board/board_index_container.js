import { connect } from "react-redux";
import BoardIndex from "./board_index";
import { fetchAllBoards } from '../../actions/board_actions';
import { fetchAllCons } from "../../actions/cons_actions";

const mapStateToProps = (state, ownProps) => {
  let boards = state.session.currentUser.boards
  let currentUser = state.session.currentUser
  return { boards, currentUser }
};

const mapDispatchToProps = dispatch => ({
 fetchAllBoards: () => dispatch(fetchAllBoards()),
 fetchAllCons: () => dispatch(fetchAllCons())
//  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardIndex)