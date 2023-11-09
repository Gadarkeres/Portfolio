import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import './MenuMobile.css'
import { FaXmark } from "react-icons/fa6";
import {Link} from 'react-router-dom'


const MenuMobile = () => {
  const { menuisVisible, toggleMenu } = useContext(MenuContext);

  return (
    <div className={`box_menu ${menuisVisible ? "visible" : "hidden"}`}>
      {menuisVisible && (
        <nav className='menu_mobile' >
            <FaXmark onClick={toggleMenu}/>
          <ul>
            <li >
            <Link to={'/'} onClick={toggleMenu}>Inicio</Link>
            </li>
            <li>
              <a href="#section2">Sobre mim</a>
            </li>
            <li>
              <a href="#section3">Habilidades</a>
            </li>
            <li>
            <a href="#section4">Projetos</a>
            </li>
            <li><Link className='contact-btn' to={'contact'} onClick={toggleMenu} style={{color:"#CEDEBD"}}>CONTATO</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuMobile