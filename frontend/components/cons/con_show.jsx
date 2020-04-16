import React from 'react';
import { withRouter } from 'react-router-dom';


class ConShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_id: null
    }
    this.redirect_feed = this.redirect_feed.bind(this);
    // this.redirect_link = this.redirect_link.bind(this);
    // this.handleAddToBoard = this.handleAddToBoard.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchCon(this.props.match.params.id);
    // this.props.fetchAllBoards();
  }


  redirect_feed() {
    // debugger
    this.props.history.goBack();
  }

  // update(field) {
  //   return e => {
  //     return this.setState({
  //       [field]: e.currentTarget.value
  //     });
  //   }
  // }

  // getBoardNames() {
  //   const boards = Object.values(this.props.boards).map(board => {
  //     return <option value={board.id}>{board.name}</option>
  //   });
  //   return boards;
  // }

  // redirect_link() {
  //   if (this.props.Con.link) {
  //     return <div className="redirect"><img src={window.redirectURL}></img><a href={`https://${this.props.con.link}`} target="_blank">{this.props.Con.link}</a></div>
  //   }
  // }

  // handleAddToBoard(){
  //   debugger
  //   let Con = Object.assign({}, this.props.Con);
  //   Con.board_id = parseInt(this.state.board_id);
  //   delete Con["photo_url"];
  //   delete Con["id"];
  //   this.props.createCon({ Con });
  // }


  // handleSubmit(e) {
  //   let { title, description, author_id, photo } = this.props.con
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('con[title]', title)
  //   // formData.append('con[link]', link)
  //   formData.append('con[description]', description)
  //   // formData.append('con[id]', id);
  //   formData.append('con[author_id]', author_id)
  //   // formData.append('con[board_id]', board_id)
  //   formData.append('con[photo]', photo);

  //   // debugger
  //   //   this.props.createCon(formData);
  // }

  render() {
    // debugger
    if (!this.props.con) {
      return <div className="loader"></div>
    }
    return (
      <>
        <button id="back" onClick={this.redirect_feed}>X</button>
        <div className="con-container">
          <div id='con-image'><img src={this.props.con.photo_url} /></div>
          {/* <button className="red-button" id="edit" onClick={() => this.props.openModal('editCon', { id: this.props.Con.id })}>Edit</button> */}
          <div id="con-info">
            <h3>{this.props.con.title}</h3>
            {/* <h4>This Con is saved to: {this.props.board.name}</h4> */}
            <h4>Created by {this.props.author.email} </h4>
            {/* {this.redirect_link()} */}
            {/* <div className="custom-select">
              <select onChange={this.update("board_id")}>
                <option>Choose a Board</option>
                {this.getBoardNames()}

              </select>
              <input onClick={this.handleSubmit} type="submit" value="Save" />
            </div> */}

          </div>
        </div>
      </>
    )
  }
}

export default ConShow;