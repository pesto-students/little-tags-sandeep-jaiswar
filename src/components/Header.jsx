import React from 'react';
import '../styles/components/Header.css';

function Header(props) {
  return (
    <nav className="header">
      <div className="hamburger" onClick={() => props.state.setShowSidebar(!props.state.showSideBar)}>
        <div className={props.state.showSideBar ? "hamLine cross1" : "hamLine"}></div>
        <div className={props.state.showSideBar ? "hamLine cross2" : "hamLine"}></div>
        <div className={props.state.showSideBar ? "hamLine cross3" : "hamLine"}></div>
      </div>
      {/* <div className="logo">
        <img src="https://icons.iconarchive.com/icons/social-media-icons/glossy-social/512/Spotify-icon.png" height="50px" width="50px" alt="logo" />
      </div> */}
      <div className="container">
        {/* <div className="search-container">
          <input type="text" name="search" placeholder="Search.." />
          <button type="submit">
            <FaSearch />
          </button>
        </div> */}
        <div className="signup-text" onClick={()=>props.state.setShowModal(true)}>
          SIGN UP
        </div>
        <button type="button" onClick={()=>props.state.setShowModal(true)} className="loginBtn">LOG IN</button>
      </div>
    </nav>
  )
}

export default Header;
