import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardIndex from "../board/board_index";
import { editBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import EditBoardFormContainer  from './edit_board_form_container';


const mapDispatchToProps = dispatch => {
  return {
  editBoard: (id) => dispatch(openModal("editBoard", {id})),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
}};


class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirect_pins = this.redirect_pins.bind(this);
    this.openEdit = this.openEdit.bind(this)
  }

  openEdit(e){
    e.stopPropagation();
    this.props.editBoard(this.props.board.id)
  }

  redirect_pins(){
    this.props.history.push(`/boards/${this.props.board.id}`)
  }
 
  render() {
    // debugger
    let {name} = this.props.board
    return (
      <>
      <div className="board-container" onClick={this.redirect_pins}>
        <div className="title">{name}</div>
        <br/>
        <br/>
          <button className='edit-button' onClick={this.openEdit}><img className="board-logo" src={window.editURL} /></button>
        </div>
      </>
    )
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(BoardIndexItem)
);
