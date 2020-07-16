/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./assets/images/nerd-red.png";
import "./css/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import Card from "./components/Card";
import Button from "./components/Button";
import ToDoComp from "./components/ToDoComp";
import profile from "./assets/images/wall-e.png";
import Contact from "./components/Contact";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = {
      data: [],
      isLoading: true,
      openNav: true,
      badge: "",
      projects: [],
      showMore: false,
      isLoaded: true,
      show_ip: [],
    };
  }
  componentDidMount() {
    //method is called after the component is rendered
    fetch("http://www.geoplugin.net/json.gp")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ show_ip: res.geoplugin_request });
      });
  }

  componentDidUpdate() {
    //Runs after componentDidMount is called ( after the update has been rendered in the DOM).
  }
  componentWillUnmount() {
    //The component is run before this whole component is unmounted(removed).
    console.log(
      "The component is run before this component is  unmounted(removed)."
    );
  }
  //If you use arrow function, you need not use bind, if using normal function, you must use this.bind in constructor

  handleChange = (e) => {
    this.setState({ add: e.target.value });
  };
  render() {
    const { data, isLoading, add, showMore, badge } = this.state;

    return (
      <div className="App" id="top">
        <NavBar />
        <SectionHeader logo={logo} />

        <div id="aboutme"></div>
        {/* <ToDoComp /> */}
        <section className="about-me-container">
          <div className="container">
            <div className="row text-white">
              <div className="col-sm-4">
                <div>
                  <img
                    className="img-fluid"
                    src={profile}
                    alt="Amruth Kuntamalla"
                  />
                </div>
                <div></div>
              </div>
              <div className="col-sm-8 about-me-text">
                <div className="about-name">Amruth Kuntamalla</div>
                <div className="about-me-text">
                  I am a passionate Web Developer, Cyber Security Entusiast and
                  a cloud Enthusiast. I am fluent in C++, Python and JavaScript.
                  I have been in love with computers since my childhood.
                  <p>
                    Currently, I am focusing on the Web App Security. I have
                    keen interest in the areas of Security and Cloud. Their
                    ability to ease our work and providing a better service
                    always amazes me!
                  </p>
                  <p>You can find my resume here..!</p>
                  <div id="tryhackme"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="body-container container">
          <hr className="m-2" style={{ color: "white" }} />
          <div id="projects"></div>
          <div className="heading">Projects</div>
          <div className="row mb-4">
            <div className="col-md-6 col-lg-4">
              <Card
                title="Student Portal"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Card
                title="College Website"
                type="Prototype"
                content="  The college website clone built with django framework and PostgreSQL Database."
                openLink="https://www.google.com"
                techStack="Django, PostgreSQL,HTML/CSS "
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
          </div>
          <div id={showMore ? "show" : "show-less"} className="row mb-4">
            <div className="col-md-6 col-lg-4">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
          </div>

          <a
            className="border-black border"
            id="showMore"
            onClick={() => this.setState({ showMore: !showMore })}
          >
            {showMore ? "Show Less" : "Show More"}
          </a>
        </section>

        <div id="contact"></div>
        <Contact />
        <hr className="m-3" />
        <div className="footer text-center text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase h3 mb-4">Location</h4>
                <p className="lead mb-0">
                  IIIT Trichy, NIT Trichy Campus <br />
                  Trichy, Tamilnadu
                </p>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4 h3">Around the Web</h4>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.twitter.com"
                >
                  <ion-icon color="white" name="logo-twitter"></ion-icon>
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.facebook.com"
                >
                  <ion-icon name="heart"></ion-icon>
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.twitter.com"
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.twitter.com"
                >
                  <ion-icon name="heart"></ion-icon>
                </a>
              </div>
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4 h3">Mail</h4>
                <p className="lead mb-0">amruthk99@gmail.com</p>
                <p className="lead mb-0">amruthk17e@iiitt.ac.in</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <a href="#top" id="scrollToTop">
          <ion-icon name="arrow-up-outline" id="arrow"></ion-icon>
        </a>
      </div>
    );
  }
}

export default App;
