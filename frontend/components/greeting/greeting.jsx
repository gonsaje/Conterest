import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className='session-links'>
      <div className='links-form'>
          <Link to="/" className="header-link">
            <h1 className="dimterest-header">dimterest</h1>
          </Link>
        {/* <button className="login-signup"> */}
        <Link className='greet-login' to="/login">login</Link>
        {/* </button> */}
          {/* &nbsp;&nbsp;or&nbsp;&nbsp; */}
        {/* <button className="login-signup"> */}
          <Link className='greet-login' to="/signup">signup</Link>
        {/* </button> */}
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  const loginSuccess = () => (
    <div>

    </div>
  );

  return currentUser ? loginSuccess() : sessionLinks();
};


export default Greeting;
