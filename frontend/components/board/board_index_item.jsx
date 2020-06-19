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
    this.redirect = this.redirect.bind(this);
    this.filterCons = this.filterCons.bind(this)
  }

  redirect(){
    this.props.history.push(`/boards/${this.props.board.id}`)
  }
  
  filterCons(){
    let boardId = this.props.boardId;
    let cons = Object.values(this.props.cons);

    return cons.filter(con => con.board_id === boardId); 

  }
 
  render() {
    if (!this.props.cons) {
      return null;
    }
    let title = this.props.board.title
    let cover = this.filterCons()
    let photo;
    if(cover.length) photo = cover[0].photo_url
    return (
      <>
      <div className="board-container" onClick={this.redirect}>
        <img className="board-cover" src={photo}/>

        <div className="boards-title">{title}</div>
        <div className="con-amount">{cover.length} cons</div>
        </div>
      </>
    )
  }
}

export default withRouter(connect(msp,mapDispatchToProps)(BoardIndexItem));
