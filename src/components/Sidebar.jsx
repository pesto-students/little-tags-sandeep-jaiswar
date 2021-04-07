import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import '../styles/components/Sidebar.css';

function Sidebar(props) {
  return (
    <nav className={props.state.showSideBar ? "sidebar hide" : "sidebar"}>
      <ul className="nav-menu-items">
        <li>
          <Link to="/home" className="navbar-toggle">
            <FaUserAlt />
            <div className="link-text">Home</div>
          </Link>
        </li>
        <li>
          <Link to="/orders" className="navbar-toggle">
            <FaSearch />
            <div className="link-text">My Orders</div>
          </Link>
        </li>
        <li>
          <Link to="/liked" className="navbar-toggle">
            <FaHeart />
            <div className="link-text">Liked Products</div>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="navbar-toggle">
            <FaShoppingCart />
            <div className="link-text">My Cart</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
