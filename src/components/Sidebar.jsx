import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Sidebar.css';

function Sidebar(props) {
  return (
    <nav className={props.state.showSideBar?"sidebar hide":"sidebar"}>
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="/hello">hello</Link>
        </li>
        <li className="navbar-toggle">
          <Link to="/hello">hello</Link>
        </li>
        <li className="navbar-toggle">
          <Link to="/hello">hello</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
