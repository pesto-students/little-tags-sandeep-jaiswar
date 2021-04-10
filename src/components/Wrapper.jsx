import React,{useState} from 'react';
import Modal from './Modal';
import Navbar from "./Navbar";


function Wrapper({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="wrapper">
      <Navbar state={{showModal, setShowModal}} />
      {showModal && <Modal setShowModal={setShowModal} />}
      {children} 
    </div>
  )
}

export default Wrapper
