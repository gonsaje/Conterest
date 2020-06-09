import React from 'react';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  render() {

    const { user } = this.props;

    if (!user) return <div></div>; 
    
    return (
      <div className='profile-container'>
          {user.email}
      </div>
    )
  }
}

export default Profile;