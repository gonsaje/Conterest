import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

  const navBar = currentUser ? (
    <div className='nav-beauty'>
      <div className='front-nav'>
        <Link to="/feed" className="header-nav-link">
          <img className='conterest-logo' id="logo" src={window.logoURL} />
        </Link>
        <Link to="/feed" className="header-home-link">
          <h1 className="home">Home</h1>
        </Link>
        <Link to="/following" className="header-following-link">
          <h1 className="following">Following</h1>
        </Link>
      </div>
      <div className='nav-search'>
        <input className='search-bar' type="search" placeholder='"issa vibe?"'/>
      </div>
      <div className='menu'>
        <button><i className="fas fa-bell"></i></button>
        <button><i className="fas fa-comment-dots"></i></button>
        <Link to={`/profile/${currentUser.id}`}>
        <button><i className="fas fa-portrait"></i>  </button>
        </Link>
        
        <button className='logout-button' onClick={logout}>Logout</button>
       
      </div>
        
    </div>
  ) : (
    <div>

    </div>
  );
  return (
    <div className="nav-bar"> 
        {navBar}
    </div>
  )
}
