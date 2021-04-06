import React from 'react';
import { FaUserAlt, FaSearch, FaShoppingCart,FaHeart } from 'react-icons/fa';
import '../styles/components/Header.css';

function Header(props) {
  return (
    <nav className="header">
      <div className="hamburger" onClick={()=>props.state.setShowSidebar(!props.state.showSideBar)}>
        <div className={props.state.showSideBar?"hamLine cross1":"hamLine"}></div>
        <div className={props.state.showSideBar?"hamLine cross2":"hamLine"}></div>
        <div className={props.state.showSideBar?"hamLine cross3":"hamLine"}></div>
      </div>
      <div className="logo">
        <img src="https://icons.iconarchive.com/icons/social-media-icons/glossy-social/512/Spotify-icon.png" height="50px" width="50px" alt="logo" />
      </div>
      <div className="container">
        <div className="">
          <FaSearch />
        </div>
        <div className="">
          <FaUserAlt />
        </div>
        <div className="">
          <FaHeart/>
        </div>
        <div className="">
          <FaShoppingCart/>
        </div>
      </div>
    </nav>
  )
}

export default Header;
