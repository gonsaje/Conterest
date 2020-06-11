import { connect } from "react-redux";
import BoardIndex from "./board_index";
import { fetchAllBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  let boards = state.entities.boards;
  // debugger
  return { boards }
};

const mapDispatchToProps = dispatch => ({
 fetchAllBoards: () => dispatch(fetchAllBoards()),
//  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardIndex)