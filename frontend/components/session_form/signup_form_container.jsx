import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.sessionErrors,
    formType: 'signup',
    navLink: <Link to="/login">Log In</Link>,
  };
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
