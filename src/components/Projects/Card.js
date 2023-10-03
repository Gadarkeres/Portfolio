import React from "react";
import "./Card.css";
import { FaGithub } from "react-icons/fa";

const Card = ({ img, title, link, repositorio }) => {
  return (
    <div className="container_project">
      <div className="img">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="Titulo">
        <h4>{title}</h4>
        <a href={repositorio} target="_blank">Código <FaGithub/></a>
      </div>
    </div>
  );
};

export default Card;
