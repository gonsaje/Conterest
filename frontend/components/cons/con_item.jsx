import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";


class ConIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.con.title,
      id: this.props.con.id,
      selected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const con = this.props.con;
    this.setState.selected = true;
  }

  render() {
    const photo = this.props.con.photo_url ? <img src={this.props.con.photo_url} /> : "No photo";


    return (
      <Link to={`/cons/${this.state.id}`} >
        <div className="con-photo">
          <div className="overlay">{photo}</div>
          

        </div>
      </Link>
    )
  }
}
export default ConIndexItem;
