import React from 'react';
import Logo from '../assets/logo.jpg';
import { FaUserAlt, FaSearch, FaShoppingCart,FaHeart } from 'react-icons/fa';
import '../styles/components/Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="hamburger">
        <div className="hamLine"></div>
        <div className="hamLine"></div>
        <div className="hamLine"></div>
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
