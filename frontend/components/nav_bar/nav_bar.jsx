import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h1 className="logo">dimterest</h1>
      <h3>Welcome {currentUser.email}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>

    </div>
  );
  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  )
}
