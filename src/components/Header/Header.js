import './Header.css'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import {Link} from 'react-router-dom'
// icones
import { FaBars } from "react-icons/fa6";
import { ButtonContext } from '../../context/ButtonContext';

const Header = () => {
      const {toggleMenu} = useContext(MenuContext)
      function scrollToElement(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      }
      const {backbutton, toggleButton} = useContext(ButtonContext)
      

  return (
    <header>
      <div className="menu-mobile">
      <FaBars onClick={toggleMenu}/>
    </div>
    <div className="logo" style={{cursor:'default'}}>M/R</div>
    <div className="Box-nav">
      <nav>
        <ul>
        <li><a onClick={() => scrollToElement('section1')}>Ínicio</a></li>
         <li><a onClick={() => scrollToElement('section2')}>Sobre mim</a></li>
        <li><a onClick={() => scrollToElement('section3')}>Habilidades</a></li>
        <li><a onClick={() => scrollToElement('section4')}>Projetos</a></li>
          {backbutton ? (
             <li><Link className='contact-btn' onClick={toggleButton} to={'/'}style={{cursor:"pointer", backgroundColor:'#6eb8f5', color:"#0e4361"}}>VOLTAR</Link></li>
          ):(
            <li><Link className='contact-btn' onClick={toggleButton} to={'contact'}style={{cursor:"pointer"} }>CONTATO</Link></li>
          )}
        </ul>
      </nav>
    </div>
   </header>
  )
}

export default Header