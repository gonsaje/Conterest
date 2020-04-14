import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const navBar = currentUser ? (
    <div className='nav-beauty'>
      <div className='front-nav'>
        <Link to="/" className="header-nav-link">
          <h1 className="conterest-header">C</h1>
        </Link>
        <Link to="/dims" className="header-home-link">
          <h1 className="home">Home</h1>
        </Link>
        <Link to="/" className="header-following-link">
          <h1 className="following">Following</h1>
        </Link>
      </div>
      <div className='nav-search'>
        <input className='search-bar' type="search" placeholder='"issa vibe?"'/>
      </div>
      <div className='menu'>
        <i className="fas fa-bell"></i>
        <i className="fas fa-comment-dots"></i>
        <i className="fas fa-portrait"></i>        
        <i className="fas fa-angle-down"></i>
        {/* <ul>
          <li>
            <button className='logout-button' onClick={logout}>Logout</button>
          </li>
        </ul> */}
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
