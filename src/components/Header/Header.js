import './Header.css'
import { useState, useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
// icones
import { FaBars } from "react-icons/fa6";

const Header = () => {
   
  
  const [menuAtivo, setMenuativo] = useState('inicio')
    const handleMenuItemClick = (item) =>{
        setMenuativo(item)
      }

      const {toggleMenu} = useContext(MenuContext)
      
  return (
    <header>
      <div className="menu-mobile">
      <FaBars onClick={toggleMenu}/>
    </div>
    <div className="logo"><a href="#section1" className='link'>M/R</a></div>
    <div className="Box-nav">
      <nav>
        <ul>
        <li><a href="#section1"onClick={() => { handleMenuItemClick('Início'); }} className={menuAtivo === 'Início' ? 'ativo' : ''}>Início</a></li>
          <li><a href="#section2"onClick={() => { handleMenuItemClick('Sobre mim');  }} className={menuAtivo === 'Sobre mim' ? 'ativo' : ''} >Sobre mim</a></li>
          <li><a href="#section3"  onClick={() => { handleMenuItemClick('Habilidades');}} className={menuAtivo === 'Habilidades' ? 'ativo' : ''} >Habilidades</a></li>
          <li><a href="#section4" onClick={() => { handleMenuItemClick('Projetos'); }} className={menuAtivo === 'Projetos' ? 'ativo' : ''} >Projetos</a></li>
          
        </ul>
      </nav>
   
    </div>
   </header>
  )
}

export default Header