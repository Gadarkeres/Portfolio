import React from 'react'
import './Modal.css'
import { FaRegWindowClose } from "react-icons/fa";
import img from './img/sucess.png'


const Modal = ({open, setOpen, title, paragraph}) => {
    const closeModal = () => {
        setOpen(!open)
      };
      const stopPropagation = (e) => {
        e.stopPropagation();
      };
    
  if(open){
    return (
        <div className="modal-background" onClick={closeModal}>
         <div className="modal" onClick={stopPropagation}>
         <img src={img} alt="sucesso!" />
             <FaRegWindowClose onClick={closeModal}/>
             <h2>{title}</h2>
             <p style={{color:"#435334"}}>{paragraph}</p>
             
             <button onClick={closeModal}>Fechar</button>
         </div>
        </div>
       )
  }
}

export default Modal