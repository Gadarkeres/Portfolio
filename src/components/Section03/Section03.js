import "./Section03.css";
//hooks
import { useState } from "react";
import { useInView } from "react-intersection-observer";
// icons
import { FaWindowClose } from "react-icons/fa";
//images
import html_image from "./images/html-logo.png";
import css_image from "./images/css-image.png";
import js_image from "./images/javascript-logo.png";
import react_image from "./images/react-icon.png";
import git_image from "./images/git.png";
import tailwind_image from "./images/tailwind-css-logo-5AD4175897-seeklogo.com.png";
// pdf
import pdf from "./file/CV-Atualizado-Matheus.pdf";
// hook
import { mensagemHTML } from "./hook";
import { mensagemCSS } from "./hook";
import { mensagemJS } from "./hook";
import { mensagemReact } from "./hook";
import { mensagemGit } from "./hook";
import { mensagemTailwind } from "./hook";

const Section03 = () => {
  const [msg, setMsg] = useState(
    "/* Selecione alguma tecnologia acima para saber mais */"
  );
  const [msgAtiva, setMsgAtiva] = useState(null);
  const [expandText, setExpandtext] = useState(null);

  const handleMsgativa = (item) => {
    setMsgAtiva(item);
  };

  // Trocando mensagens do container
  const handleChangeMsg = (message) => {
    setExpandtext("text_expand");
    setTimeout(() => {
      setMsg(message);
    }, 150);
  };

  const handleContainerMsg = (item) => {
    switch (item) {
      case "html":
        handleChangeMsg(mensagemHTML);
        break;
      case "css":
        handleChangeMsg(mensagemCSS);
        break;
      case "js":
        handleChangeMsg(mensagemJS);
        break;
      case "react":
        handleChangeMsg(mensagemReact);
        break;
      case "git":
        handleChangeMsg(mensagemGit);
        break;
      case "tailwind":
        handleChangeMsg(mensagemTailwind);
        break;
      default:
        break;
    }
  }
  // fechando caixa de msg

  const handleCloseBox = () => {
    if (setMsg !== null && setExpandtext !== null) {
      setMsg("/* Selecione alguma tecnologia acima para saber mais */");
      setExpandtext(null);
      setMsgAtiva(null);
    }
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedClass = inView ? "animaction" : "";

  return (
    <section id="section3">
      <div className="tittle">
        <h2>Habilidades</h2>
      </div>
      <div className="container-pai">
        <div className="container">
          <div
            className={`habilidades ${animatedClass}`}
            ref={ref}
            onClick={() => {
              handleContainerMsg("html");
              handleMsgativa("html");
            }}
            id={msgAtiva === "html" ? "habilidade_ativa" : ""}
          >
            <img className="image" src={html_image} alt="icone do html" />
          </div>

          <div
            className={`habilidades ${animatedClass}`}
            onClick={() => {
              handleContainerMsg("css");
              handleMsgativa("css");
            }}
            id={msgAtiva === "css" ? "habilidade_ativa" : ""}
          >
            <img
              className="image"
              style={{ position: "absolute", right: "30px" }}
              src={css_image}
              alt="icone do css"
            />
          </div>

          <div
            className={`habilidades ${animatedClass}`}
            onClick={() => {
              handleContainerMsg("js");
              handleMsgativa("js");
            }}
            id={msgAtiva === "js" ? "habilidade_ativa" : ""}
          >
            <img className="image" src={js_image} alt="icone do Javascript" />
          </div>

          <div
            className={`habilidades ${animatedClass}`}
            onClick={() => {
              handleContainerMsg("react");
              handleMsgativa("react");
            }}
            id={msgAtiva === "react" ? "habilidade_ativa" : ""}
          >
            <img
              className="image"
              src={react_image}
              style={{ position: "absolute", right: "32px" }}
              alt="icone do React"
            />
          </div>
          <div
            className={`habilidades ${animatedClass}`}
            onClick={() => {
              handleContainerMsg("git");
              handleMsgativa("git");
            }}
            id={msgAtiva === "git" ? "habilidade_ativa" : ""}
          >
            <img
              className="image"
              src={git_image}
              style={{ position: "absolute", right: "32px" }}
              alt="icone do Git"
            />
          </div>
          <div
            className={`habilidades ${animatedClass}`}
            onClick={() => {
              handleContainerMsg("tailwind");
              handleMsgativa("tailwind");
            }}
            id={msgAtiva === "tailwind" ? "habilidade_ativa" : ""}
          >
            <img
              className="image"
              src={tailwind_image}
              style={{ position: "absolute", right: "20px", width: "120px" }}
              alt="icone do Git"
            />
          </div>
        </div>
        <div className="text">
          <div className={`text_little ${expandText}`}>
            {expandText === "text_expand" ? (
              <FaWindowClose onClick={handleCloseBox} />
            ) : null}
            <p>{msg}</p>
          </div>
        </div>
      </div>
      <div className="button_container">
        <a href={pdf} download>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Section03;
