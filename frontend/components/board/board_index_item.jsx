import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardIndex from "../board/board_index";
import { editBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import EditBoardFormContainer  from './edit_board_form_container';


const msp = (state, ownProps) => {
  let cons = state.entities.cons
  return {cons}
}

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
    this.filterCons = this.filterCons.bind(this)
  }

  openEdit(e){
    e.stopPropagation();
    this.props.editBoard(this.props.board.id)
  }

  redirect_pins(){
    this.props.history.push(`/boards/${this.props.board.id}`)
  }
  
  filterCons(){
    let boardId = this.props.boardId;
    debugger
    let cons = Object.values(this.props.cons);
    debugger
    return cons.filter(con => con.board_id === boardId); 

  }
 
  render() {
    // debugger
    // console.log('BOARD INDEX ITEM COMPONENT: ', this.filterCons())
    if (!this.props.cons) {
      return null;
    }
    let title = this.props.board.title
debugger
    let cover = this.filterCons()
    let photo = ''
    if(cover.length) photo = cover[0].photo_url

    console.log("COVERRRR ", cover)
    debugger
    return (
      <>
      <div className="board-container" onClick={this.redirect_pins}>
        <img className="board-cover" src={photo}/>

        <div className="boards-title">{title}</div>
        <div className="con-amount">{cover.length} cons</div>
        </div>
      </>
    )
  }
}

export default withRouter(
  connect(
    msp,
    mapDispatchToProps
  )(BoardIndexItem)
);
