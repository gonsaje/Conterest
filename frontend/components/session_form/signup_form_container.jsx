import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup';

// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'signup',
//     navLink: <Link to="/login">log in</Link>,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   // return {
//   //   processForm: (user) => dispatch(signup(user)),
//   // };
// };
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(null, mapDispatchToProps)(SignupForm);
