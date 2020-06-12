import React from 'react';
import ConItemContainer from './con_item_container';

class FollowingCon extends React.Component {
    constructor(props) {
      super(props);
  
    }
  
    componentDidMount() {
     this.props.fetchAllCons();
     this.props.fetchAllUsers();
    }
  

    followed(con) {
    debugger
        let followedIds = [];
        for(let i = 0; i < this.props.followings.length;i++) {
            let followedUser = this.props.followings[i];
            followedIds.push(followedUser.id)
        }
debugger
        if (followedIds.includes(con.author_id)){
            return true;
        } 
        return false;

    }
  
    render() {
        const usernames = Object.values(this.props.followings).map(followed_user => {
            return <div className="followed-users" key={followed_user.id}>{followed_user.email.split("@")[0]}</div>
        })

        
        const cons = Object.values(this.props.cons).map(con => {
            if (this.followed(con)) {
                return (<ConItemContainer key={con.id} con={con} conId={con.id} /> )
            }
        });
debugger
    return (
        <div className="following-index">
            <div className="following-users">
                <div className="follow-header">From the people you follow:</div>
                <div className="the-people-u-follow">{usernames}</div>
                
            </div>
            <div className="con-index">
                <div className="con-image">
                    {cons}
                </div>
            </div>
        </div>
    )
    }
  }
  
  export default FollowingCon;