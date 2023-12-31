import './Footer.css'
// icons
import { FaLinkedin,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div className='contato'>
        <p>Desenvolvido por: Matheus Rafael.</p>

        </div>
        <div className="icones">
        <p>
          <a href="https://www.linkedin.com/in/matheus-rafael-b0aa18259/" target='_blank' ><FaLinkedin/></a>
          <a href="https://github.com/Gadarkeres" target='_blank'  rel="noopener noreferrer"><FaGithub/></a>
      

        </p>
        </div>
    </footer>
  )
}

export default Footer