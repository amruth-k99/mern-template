import React, { Component } from "react";
import "../css/nav-bar.css";
class NavBar extends Component {
  constructor() {
    super();
    this.state = { active: 0, toggle: true };
  }
  render() {
    const { active, toggle } = this.state;
    return (
      <div id="navbar">
        <div className="container" id="logo-container">
          <div>
            <ion-icon
              name={toggle ? "menu" : "close"}
              id="toggle"
              onClick={() => this.setState({ toggle: !toggle })}
            ></ion-icon>
            <a href="#root" id="logo">
              TheRealScripts
            </a>
          </div>
          <div
            id={toggle ? "navbar-right" : "navbar-toggle"}
            className={!toggle ? "hidden" : "show"}
          >
            <a
              className={active === 0 ? " active" : ""}
              href="#root"
              onClick={() => this.setState({ active: 0, toggle: !toggle })}
            >
              Home
            </a>
            <a
              className={active === 1 ? "active" : ""}
              href="#projects"
              onClick={() => this.setState({ active: 1, toggle: !toggle })}
            >
              Projects
            </a>
            <a
              className={active === 2 ? "active" : ""}
              href="#aboutme"
              onClick={() => this.setState({ active: 2, toggle: !toggle })}
            >
              About
            </a>
            <a
              className={active === 3 ? "active" : ""}
              href="#contact"
              onClick={() => this.setState({ active: 3, toggle: !toggle })}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
