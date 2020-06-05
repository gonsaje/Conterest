import { connect } from 'react-redux';
import { newCon } from '../../actions/con_actions';
import { fetchUser } from '../../actions/user_actions';
import ConBuilder from './con_builder';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  boards: Object.values(state.entities.boards),
  errors: Object.values(state.errors.pins),
  user: Object.values(state.entities.users)[0],
})

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(newCon(con)),
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConBuilder)