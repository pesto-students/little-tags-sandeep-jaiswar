import React, { useEffect, useRef } from 'react';
import { FaFacebook,FaArrowRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import '../styles/components/Modal.css'

function Modal({setShowModal}) {
  const phoneNoRef = useRef(null);
  useEffect(() => {
    phoneNoRef.current.focus();
  }, []);
  return (
    <div id="popup1" className="overlay">
      <div className="popup" >
        <div className="close" onClick={()=>setShowModal(false)}>×</div>
        <div className="content">

            <div>Explore Nishadya</div>
            <div>using social platforms</div>

          <div className="social-box">
            <FaFacebook size="25px"/>
            <FcGoogle size="25px"/>
          </div>
          <h3>or</h3>
          <form>
            <input type="text" ref={phoneNoRef} placeholder="Enter phone number"/>
            <button className="rightArrow" type="submit">
              <FaArrowRight/>
            </button>
          </form>
    		</div>
      </div>
    </div>
  )
}

export default Modal
