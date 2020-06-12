import { connect } from "react-redux";
import Profile from "./profile";
import { withRouter } from "react-router-dom";
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';


const msp = (state, ownProps) => {
  
  const currentUser = state.session.currentUser;
  const user = state.entities.users[ownProps.match.params.id];
  return {currentUser, user };
}


const mdp = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  
})

export default withRouter(connect(msp, mdp)(Profile));