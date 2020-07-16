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
            {toggle ? (
              <ion-icon
                className="iconToggle"
                name="menu"
                id="toggle"
                onClick={() => this.setState({ toggle: !toggle })}
              ></ion-icon>
            ) : (
              <ion-icon
                className="iconToggle"
                name="close"
                id="toggle"
                onClick={() => this.setState({ toggle: !toggle })}
              ></ion-icon>
            )}

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
              className={active === 4 ? "active" : ""}
              href="#blog"
              onClick={() => this.setState({ active: 4, toggle: !toggle })}
            >
              Blog
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
