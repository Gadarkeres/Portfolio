import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import './MenuMobile.css'
import { FaXmark } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { ButtonContext } from '../../context/ButtonContext';


const MenuMobile = () => {
  const { menuisVisible, toggleMenu } = useContext(MenuContext);

  function scrollToElement(id) {
    toggleMenu()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const {backbutton, toggleButton} = useContext(ButtonContext)

  return (
    <div className={`box_menu ${menuisVisible ? "visible" : "hidden"}`}>
      {menuisVisible && (
        <nav className='menu_mobile' >
            <FaXmark onClick={toggleMenu}/>
            <ul>
            <li onClick={() => scrollToElement('section1')}><Link to={'/'}>Início</Link></li>
           <li><a onClick={() => scrollToElement('section2')}style={{cursor:"pointer"}}>Sobre mim</a></li>
          <li><a onClick={() => scrollToElement('section3')}style={{cursor:"pointer"}}>Habilidades</a></li>
         <li><a onClick={() => scrollToElement('section4')} style={{cursor:"pointer"}}>Projetos</a></li>
         {backbutton && (
            <li><Link className='contact-btn' onClick={toggleButton} to={'/'}style={{cursor:"pointer", backgroundColor:'#6eb8f5', color:"#0e4361"}}>VOLTAR</Link></li>
          )}
          {!backbutton &&(
            <li><Link className='contact-btn' onClick={toggleButton} to={'contact'}style={{cursor:"pointer", color:"white"}  }>CONTATO</Link></li>
          )}
          
        </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuMobile