import React from 'react';
import { withRouter } from 'react-router-dom';


class ConShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
    this.redirect_feed = this.redirect_feed.bind(this);
  }

  componentDidMount() {
    this.props.fetchCon(this.props.con)
    this.props.fetchAllBoards();
  }


  redirect_feed() {
    // debugger
    this.props.history.goBack();
  }

  getBoardTitle(id) {
    let board;
    const boards = Object.values(this.props.boards)
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === id) {
        return boards[i].title
      }
    }
  }

  getBoardNames() {
    const boards = Object.values(this.props.boards).map(board => {
      return <option key={board.id} value={board.id}>{board.title}</option>
    });
    return boards;
  }

  editButton() {
    if (this.props.currentUser.id === this.props.con.author_id) {
      return (
        <button className="pencil" id="edit" onClick={() => this.props.openModal('editCon', { id: this.props.con.id })}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
 

  
  render() {
    // debugger
    if (!this.props.con) {
      return <div className="loader"></div>
    }

    const username = this.props.currentUser.email.split("@")[0]
    return (
      <>
        <button id="back" onClick={this.redirect_feed}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="con-container">
         
          <div id='con-image'>
            <img src={this.props.con.photo_url} />
          </div>
          <div id="con-info">
            <div className="edit-save">
              {this.editButton()}
              <div className="boards-list">
                <select className="boards-drop">
                  <option>Choose a Board</option>
                  {this.getBoardNames()}

                </select>
                <button className="save-board">Save</button>
              </div>
            </div>
            <div className = "con-information">
              <p className="con-title">{this.props.con.title}</p>
              <p className="cons-save-board">{username} saved to {this.getBoardTitle(this.props.con.board_id)}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ConShow;