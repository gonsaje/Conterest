import { connect } from "react-redux";
import EditBoardForm from "./edit_board_form";
import { editBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
   const board = state.entities.boards[ownProps.id]; 
   return { board }
};

const mapDispatchToProps = dispatch => ({
  editBoard: board => dispatch(editBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  openModal: (type, props) => dispatch(openModal(type, props)),
  closeModal: () => dispatch(closeModal())
  // clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditBoardForm)
);


