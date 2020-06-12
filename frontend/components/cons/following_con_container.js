import { connect } from "react-redux";
import FollowingCon from "./following_con";
import { withRouter } from "react-router-dom";
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import { fetchAllCons } from "../../actions/cons_actions";


const msp = (state, ownProps) => {
    let cons = state.entities.cons;
    let currentUser = state.session.currentUser
    let followings = state.session.currentUser.followings
    return { cons, currentUser,followings };
}


const mdp = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAllCons: () => dispatch(fetchAllCons()),
  fetchAllBoards: () => dispatch(fetchAllBoards())
  
})

export default connect(msp, mdp)(FollowingCon);