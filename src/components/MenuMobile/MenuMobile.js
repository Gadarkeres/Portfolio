import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import './MenuMobile.css'
import { FaXmark } from "react-icons/fa6";


const MenuMobile = () => {
  const { menuisVisible, toggleMenu } = useContext(MenuContext);

  return (
    <div className={`box_menu ${menuisVisible ? "visible" : "hidden"}`}>
      {menuisVisible && (
        <nav className='menu_mobile' >
            <FaXmark onClick={toggleMenu}/>
          <ul>
            <li >
              <a href="#section1"  onClick={toggleMenu}>Ínicio</a>
            </li>
            <li>
              <a href="#section2"onClick={toggleMenu}>Sobre mim</a>
            </li>
            <li>
              <a href="#section3"onClick={toggleMenu}>Habilidades</a>
            </li>
            <li>
              <a href="#section4"onClick={toggleMenu}>Projetos</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuMobile