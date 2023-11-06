
import './Section03.css'
//hooks
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
// icons
import { FaWindowClose, } from "react-icons/fa"
//images
import html_image from './images/html-logo.png'
import css_image from './images/css-image.png'
import js_image from './images/javascript-logo.png'
import react_image from './images/react-icon.png'
// pdf
import pdf from './file/CV-Atualizado-Matheus.pdf'

const Section03 = () => {
    
const [msg, setMsg]= useState("/* Selecione alguma tecnologia acima para saber mais */")
const [msgAtiva, setMsgAtiva] = useState(null)
const [expandText, setExpandtext] = useState(null)
    
  
  const handleMsgativa = (item) =>{
    setMsgAtiva (item)
  } 

  // Trocando mensagens do container
const handleChangeMsgHTML = () =>{
    setExpandtext('text_expand')
  setTimeout(() => {
    setMsg("HTML: Conhecida por linguagem de marcação de hipertexto, o html é basicamente o  \"esqueleto\" da pagina, onde são inseridos paragrafos, titulos, botões, caixas com estilização bem padrão e genérica.")
  }, 150);
   
  }
  const handleChangeMsgCSS = () => {
    setExpandtext('text_expand')
    setTimeout(() => {
      setMsg("CSS: abreviado do cascading style sheets, é um mecanismo para aplicar estilos nos elementos HTML, via seletor de classes, tags, id's, seletores universais como * etc. ")
    }, 150);
  }
  const handleChangeMsgJS = () => {
    setExpandtext('text_expand')
    setTimeout(() => {
      setMsg("Javascript: Linguagem de programação orientada a objetos muito usado no desenvolvimento front-end mas também pode ser no lado do servidor. As principais  características do Javascript em  uma página é criar interações com o usuário com a manipulação do DOM. ")
    }, 150);
  }
  const handleChangeMsgReact = () => {
    setExpandtext('text_expand')
    setTimeout(() => {
      setMsg("React: É uma biblioteca derivada do Javascript, com as principais caracteristicas: Virtual DOM, componentização para faciliar a manuntenção do código e hooks.")
    }, 150);
  }
  
  // fechando caixa de msg
  
  const handleCloseBox = () => {
    if(setMsg !== null && setExpandtext !== null){
      setMsg("/* Selecione alguma tecnologia acima para saber mais */")
      setExpandtext(null)
      setMsgAtiva(null)
    }
  }
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
  const animatedClass = inView ? 'animaction' : ''; 

  return (
    <section id="section3">
    <div className="tittle"><h2>Habilidades</h2></div>
    <div className="container-pai">
      <div className="container">
        <div className={`habilidades ${animatedClass}` } ref={ref} onClick={() => { handleChangeMsgHTML(); handleMsgativa('html'); }} id={msgAtiva === 'html' ? 'habilidade_ativa' : ''}>
          <img  className="image"src={ html_image } alt="icone do html" />

        </div>

        <div className={`habilidades ${animatedClass}` }  onClick={() => {handleChangeMsgCSS(); handleMsgativa('css')}} id={msgAtiva === 'css' ? 'habilidade_ativa' : ''} >
        <img className="image"  style={{ position:"absolute", right:"30px"}} src={css_image} alt="icone do css" />
          
        </div>

        <div className={`habilidades ${animatedClass}` }  onClick={() => {handleChangeMsgJS(); handleMsgativa('js')}} id={msgAtiva === 'js' ? 'habilidade_ativa' : ''} >
          <img  className="image"src={js_image} alt="icone do Javascript" />
        </div>

        <div className={`habilidades ${animatedClass}` }  onClick={() => {handleChangeMsgReact(); handleMsgativa('react')}} id={msgAtiva === 'react' ? 'habilidade_ativa' : ''}>
        <img className='image' src={react_image} style={{position:"absolute", right:"32px"}}  alt="icone do React"  />

        </div>
      </div>
      <div className="text" >
        <div className={`text_little ${expandText}`}>
         {expandText === 'text_expand' ? <FaWindowClose onClick={handleCloseBox}/> : null}
          <p>{msg}</p>
        </div>
      </div>
    </div>
    <div className="button_container" >
        <a href={pdf} download>Download CV</a>
      </div>
 </section>
  )
}

export default Section03