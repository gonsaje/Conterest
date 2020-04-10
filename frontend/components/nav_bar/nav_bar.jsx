import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const navBar = currentUser ? (
    <div className='nav-beauty'>

        <Link to="/" className="header-nav-link">
          <h1 className="dimterest-header">d</h1>
        </Link>
      <div className='menu'>
        <h3 className='user-email'>{currentUser.email}</h3>
        {/* <i className="fas fa-ellipsis-h"></i> */}
        <button className='logout-button' onClick={logout}>Logout</button>
      </div>
    </div>
  ) : (
    <div>

    </div>
  );
  return (
    <header className="nav-bar"> 
        {navBar}
    </header>
  )
}
