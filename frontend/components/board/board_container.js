import { connect } from "react-redux";
import BoardIndexItem from "./board_index";
import { editBoard, fetchBoard } from "../../actions/board_actions";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.board.id;
  const name = state.entities.boards[ownProps.name];
  return { name };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: () => dispatch(fetchBoard()),
  //  createBoard: (board) => dispatch(createBoard(board)),
  editBoard: board => dispatch(editBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndexItem);