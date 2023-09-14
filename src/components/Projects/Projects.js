import './Projects.css'
// componentes
import Card from './Card'
// imagens
import img1 from './img/timer.png'
import img2 from './img/tempo.png'
import img3 from './img/email.png'
import embreve from './img/em-breve.jpg'
// pdf
import pdf from './file/Curriculo-Matheus-Att.pdf'
// icon
import { FaArrowAltCircleDown } from "react-icons/fa";


const Projects = () => {
  return (
    <section id="section4">
      <h2 className="Tittle">PROJETOS</h2>
      <div className="container_card">
        <Card img={img1} title={"Projeto pessoal timer de estudos"} link={"https://gadarkeres.github.io/Projeto-timer/"}/>
        <Card img={img2} title={'Projeto pessoal previsão do tempo'} link={"https://gadarkeres.github.io/Projeto-Tempo/"}/>
        <Card img={img3} title={'Projeto desafio validação de email'} link={"https://gadarkeres.github.io/email-validation-project/"}/>
        <Card img={embreve}title={"EM BREVE"}/>
        <Card img={embreve}title={"EM BREVE"}/>
        <Card img={embreve}title={"EM BREVE"}/>
        
      </div>
      <div className="button_container" >
        <a href={pdf} download>Download CV</a>
      </div>
    </section>
  );
}

export default Projects