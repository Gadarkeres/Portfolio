import './Section02.css'
import { FaExternalLinkAlt } from "react-icons/fa"
import { useInView } from 'react-intersection-observer';

const Section02 = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
  const [button, ButtonInview] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
  const animatedClass = inView ? 'animaction' : ''; 
  const animated = ButtonInview ? 'animaction' : ''; 
  return (
    <section id="section2">
    <div className={`card1 ${animatedClass}`} ref={ref}>
      <h2>Sobre mim</h2>
      <p>Meu nome é Matheus Rafael e sou  apaixonado por programação, tive o primeiro contato com programação em 2021 e deste então venho estudando. Com uma base sólida em HTML, CSS, JavaScript e React. Acredito que o aprendizado é uma jornada constante. Estou em busca de oportunidades para primeira experiência e aperfeiçoar ou descobrir novos conhecimentos no mundo da programação!</p>
    </div>
    <div className={`card2 ${animated}`} ref={button}>
      <a href="https://www.linkedin.com/in/matheus-rafael-b0aa18259/" target="_blank">Linkedin</a>
    </div>
   </section>
  )
}

export default Section02