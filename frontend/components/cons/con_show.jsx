import React from 'react';
import { withRouter } from 'react-router-dom';


class ConShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_id: null
    }
    this.redirect_feed = this.redirect_feed.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchCon(this.props.con.id);
  }


  redirect_feed() {
    // debugger
    this.props.history.goBack();
  }


  render() {
    // debugger
    if (!this.props.con) {
      return <div className="loader"></div>
    }

    const boards = Object.values(this.props.boards).map(board => {
      return <option></option>
    });

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
              <div className="pencil">
                <i class="fas fa-pencil-alt"></i>
              </div>
              <div>
                <select>
              
                </select>
              </div>
            </div>
            <h3>{this.props.con.title}</h3>
            <h3>{this.props.con.id}</h3>
          </div>
        </div>
      </>
    )
  }
}

export default ConShow;