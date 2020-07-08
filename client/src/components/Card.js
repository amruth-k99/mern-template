import React from "react";
import Github from "../assets/images/github.svg";
import Open from "../assets/images/open.png";
import "../css/card.css";
/* CSS in card.js as 'Card CSS' */
const Card = ({ title, type, content, techStack, github, openLink }) => {
  return (
    <div className="card card-body card-feature noselect mb-5 justify-content-between">
      <div style={{ overflow: "hidden" }}>
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
        <p className="card-text">{content}</p>
        <p>
          <b>Tech Stack:</b>
        </p>
        <p className=" m-1">{techStack}</p>
      </div>
      <div>
        <a
          href={github ? github : "#"}
          className="card-link "
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Github} width="40px" alt="Github" />
        </a>
        <a
          href={openLink ? openLink : "#"}
          className="card-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Open} width="40px" alt={Open} />
        </a>
      </div>
    </div>
  );
};
export default Card;
