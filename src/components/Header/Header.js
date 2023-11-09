import './Header.css'
import { useState, useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import {Link} from 'react-router-dom'
// icones
import { FaBars } from "react-icons/fa6";

const Header = () => {
  
      const {toggleMenu} = useContext(MenuContext)
      
  return (
    <header>
      <div className="menu-mobile">
      <FaBars onClick={toggleMenu}/>
    </div>
    <div className="logo"><a href="/#section1" className='link'>M/R</a></div>
    <div className="Box-nav">
      <nav>
        <ul>
        <li><Link to={'/'}>Inicio</Link></li>
          <li><a href="#section2">Sobre mim</a></li>
          <li><a href="#section3" >Habilidades</a></li>
          <li>
          <a href="#section4">Projetos</a>
          </li>
          <li><Link className='contact-btn' to={'contact'}>CONTATO</Link></li>
          
        </ul>
      </nav>
      {/* <a href="#section4" onClick={() => { handleMenuItemClick('Projetos'); }} className={menuAtivo === 'Projetos' ? 'ativo' : ''} >Projetos</a>*/}
   
    </div>
   </header>
  )
}

export default Header