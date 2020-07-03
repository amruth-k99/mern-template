import React from "react";
import Github from "../assets/images/github.svg";
import Open from "../assets/images/open.png";
const Card = ({ title, type, content, techStack, github, openLink }) => {
  return (
    <div className="card card-body card-feature noselect">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
      <p className="card-text ">{content}</p>
      <p>Tech Stack:</p>
      <p className="card-text">{techStack}</p>
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
