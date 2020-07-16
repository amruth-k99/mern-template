import React from "react";
import Github from "../assets/images/github.svg";
import Open from "../assets/images/open.png";
import Project from "../assets/images/project.jpg";
import "../css/card.css";
/* CSS in card.js as 'Card CSS' */
const Card = ({
  title,
  type,
  content,
  techStack,
  github,
  openLink,
  background = "#f4f6ff",
  text = "black",
}) => {
  return (
    <div
      className="card card-body card-feature noselect mb-5 justify-content-between rounded"
      style={{ backgroundColor: background, color: text }}
    >
      <img src={Project} width="100%" />
      <div className="mt-2 mb-1   ">
        <h5 className="card-title font-weight-bold">{title}</h5>
        <h6 className="card-subtitle mb-2 font-weight-light">{type}</h6>
        <p>Tech Stack:</p>
        <p className=" m-1">{techStack}</p>
        <div className="text-center mt-2">
          <a
            href={openLink ? openLink : "#"}
            className="card-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button type="button" className="btn btn-dark">
              Live Preview
            </button>
          </a>
          <a
            href={github ? github : "#"}
            className="card-link "
            rel="noopener noreferrer"
            target="_blank"
          >
            <button type="button" className="btn btn-light">
              {" "}
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
