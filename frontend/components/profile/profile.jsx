import React from 'react';
import BoardIndex from "../board/board_index_container";
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
   this.props.fetchAllUsers();
  }


  render() {
    const username = this.props.currentUser.email.split("@")[0]
    const propic = username.split("")[0]
    // console.log(this.props.currentUser.follo)
    const following = this.props.currentUser.followings.length
    const followers = this.props.currentUser.followers.length
    const boards = Object.values(this.props.currentUser.boards).map(board => {

    })

    return (
      <div className='profile-container'>
        <div className="profile-info">
          <div className="profile-left">
            <div className="username">
              {username}
            </div>
            <div className="follow-count">   
                {followers} followers · {following} following
            </div>
          </div>
              <div className="avatar">
                {propic}
              </div>
          
        </div>
        <div>
          <BoardIndex>

          </BoardIndex>
        </div>
      </div>
    )
  }
}

export default Profile;