import './Header.css'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import {Link} from 'react-router-dom'
// icones
import { FaBars } from "react-icons/fa6";

const Header = () => {
      const {toggleMenu} = useContext(MenuContext)
      function scrollToElement(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      }

      
  return (
    <header>
      <div className="menu-mobile">
      <FaBars onClick={toggleMenu}/>
    </div>
    <div className="logo"><a href="/#section1" className='link'>M/R</a></div>
    <div className="Box-nav">
      <nav>
        <ul>
        <li onClick={() => scrollToElement('section1')}><Link to={'/'}>Inicio</Link></li>
         <li><a onClick={() => scrollToElement('section2')} style={{cursor:"pointer"}}>Sobre mim</a></li>
        <li><a onClick={() => scrollToElement('section3')}style={{cursor:"pointer"}}>Habilidades</a></li>
        <li><a onClick={() => scrollToElement('section4')}style={{cursor:"pointer"}}>Projetos</a></li>
          <li><Link className='contact-btn' to={'contact'}style={{cursor:"pointer"}}>CONTATO</Link></li>
          
        </ul>
      </nav>
    </div>
   </header>
  )
}

export default Header