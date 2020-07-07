/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./assets/images/nerd-red.png";
import "./css/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import Card from "./components/Card";
import ToDoComp from "./components/ToDoComp";
import profile from "./assets/images/profile.png";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = {
      data: [],
      isLoading: true,
      openNav: true,
      projects: [],
      showMore: false,
      isLoaded: true,
    };
  }
  componentDidMount() {
    //method is called after the component is rendered
    // fetch("URL")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({ projects: res.Items });
    //     console.log(this.state.projects);
    //   });
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
    const { data, isLoading, add, showMore } = this.state;
    return (
      <div className="App" id="top">
        <NavBar />
        <SectionHeader logo={logo} />

        {/* <ToDoComp /> */}

        <div id="projects">#projects</div>
        <section className="body-container container">
          <hr className="m-2" />
          <div className="heading">Projects</div>
          <div className="row mb-3">
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
              <Card
                title="College Website"
                type="Prototype"
                content="  The college website clone built with django framework and PostgreSQL Database."
                openLink="https://www.google.com"
                techStack="Django, PostgreSQL,HTML/CSS "
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
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

          <div id={showMore ? "show" : "show-less"} className="row mb-3">
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
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

          <div id="aboutme"></div>
          <a
            className="border-black border"
            id="showMore"
            onClick={() => this.setState({ showMore: !showMore })}
          >
            {showMore ? "Show Less" : "Show More"}
          </a>
        </section>
        <hr className="m-5"></hr>

        <div className="heading">About Me</div>
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
                <div>
                  I am a passionate Web Developer, Cyber Security Entusiast and
                  a cloud Enthusiast. I am fluent in C++, Python and JavaScript.
                  I have been in love with computers since my childhood.
                  Currently, I am focusing on the Web App Security. I have keen
                  interest in the areas of Security and Cloud. Their ability to
                  ease our work and providing a better service always amazes me!
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <a href="#top" id="scrollToTop">
          <ion-icon name="arrow-up-outline" id="arrow"></ion-icon>
        </a>
      </div>
    );
  }
}

export default App;
