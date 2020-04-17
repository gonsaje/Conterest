import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import EditPinFormContainer from '../pin/edit_pin_form_container';

class ConIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.con.title,
      id: this.props.con.id
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const con = this.props.con;
    this.props.history.push(`/cons/${con.id}`);
  }

  render() {
    const photo = this.props.con.photo_url ? <img src={this.props.con.photo_url} onClick={this.handleClick} /> : "No photo";
    return (
      <>
        <div className="con-photo">
          <div className="overlay">{photo}</div>
          

        </div>
      </>
    )
  }
}
export default ConIndexItem;
{/* <button className="magic-button" onClick={() => this.props.openModal('editPin', { id: this.props.pin.id })}><img className='editform-logo' src={window.editURL} /></button>

          Add pin to a board, edit a pin  */}

{/* <h6 className="con-title">{this.props.con.title}</h6> */ }