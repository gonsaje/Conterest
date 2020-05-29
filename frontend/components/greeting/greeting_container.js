import { connect } from 'react-redux';
import React from 'react';
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
    otherForm: (
      <div>
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
      <button onClick={() => dispatch(openModal('login'))}>
      Log In
      </button>
    </div>
    ),
    closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
