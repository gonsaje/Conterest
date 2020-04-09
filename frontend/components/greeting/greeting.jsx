import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className='session-links'>
      <div className='links-form'>
          <Link to="/" className="header-link">
            <h1 className="dimterest-header"> d</h1>
          </Link>
          <div className='form-titles'>
            <h2>Welcome to Dimterest
              <p>"issa vibe"</p>
            </h2>
          </div>
          
        <Link className='greet-login' to="/login">Log In</Link>
        <Link className='greet-signup' to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
  // const personalGreeting = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Welcome, {currentUser.email}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </hgroup>
  // );

  const loginSuccess = () => (
    <div>

    </div>
  );

  return currentUser ? loginSuccess() : sessionLinks();
};


export default Greeting;
