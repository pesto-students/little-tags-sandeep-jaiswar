import React, { useState } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";

function Navbar() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div className="" style={{  transition: "all 5s"}}>
      <Header state={{showSideBar,setShowSidebar}}/>
      <Sidebar state={{showSideBar,setShowSidebar}} />
    </div>
  )
}

export default Navbar
