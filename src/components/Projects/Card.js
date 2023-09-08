import React from "react";
import "./Card.css";

const Card = ({ img, title, link }) => {
  return (
    <div className="container_project">
      <div className="img">
        <a href={link} target="_blank">
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="Titulo">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Card;
