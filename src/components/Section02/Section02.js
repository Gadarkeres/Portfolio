import "./Section02.css";
import { useInView } from "react-intersection-observer";

const Section02 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [button, ButtonInview] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedClass = inView ? "animaction" : "";
  const animated = ButtonInview ? "animaction" : "";
  return (
    <section id="section2">
      <div className={`card1 ${animatedClass}`} ref={ref}>
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Matheus Rafael e sou apaixonado por programação, tive o
          primeiro contato com programação em 2021 e deste então venho
          estudando. Com uma base sólida em HTML, CSS, JavaScript, React, Git, e
          por fim tailwind CSS. Acredito que o aprendizado é uma jornada
          constante, fiz minha graduação em abril de 2023 e agora estou em busca
          de oportunidades aperfeiçoar ou descobrir novos conhecimentos no
          desenvolvimento WEB, com meu maior ponto forte sendo no FRONT-END mas
          também pretendo estudar BACK-END!
        </p>
      </div>
      <div className={`card2 ${animated}`} ref={button}>
        <a
          href="https://www.linkedin.com/in/matheus-rafael-b0aa18259/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </section>
  );
};

export default Section02;
