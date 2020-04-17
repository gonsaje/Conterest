import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser }) => {
  const sessionLinks = () => (
    <nav className='session-links'>
      <div className='links-form'>
          <Link to="/" className="header-link">
          <img className='conterest-logo' id="logo" src={window.logoURL} />
          </Link>
          <div className='form-titles'>
            <h2>Welcome to Conterest
              <p>"issa vibe"</p>
            </h2>
          </div>
          
        <Link className='greet-login' to="/login">Log In</Link>
        <Link className='greet-signup' to="/signup">Sign Up</Link>
      </div>
    </nav>
  );

  const loginSuccess = () => (
    <div>

    </div>
  );

  return currentUser ? loginSuccess() : sessionLinks();
};


export default Greeting;
