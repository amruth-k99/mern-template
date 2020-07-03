import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="footer text-center text-white">
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
              <h4 className="text-uppercase mb-4 h3">About Me</h4>
              <p className="lead mb-0">
                "Passionate Web Developer, Cyber Security Enthusiast, Cloud
                Enthusiast willing to run a start-up"
              </p>
            </div>
          </div>
        </div>
      </footer>
      <section id="footer" className=" copyright py-4 text-center">
        <div className="container">
          <small>
            Copyrights © TheRealScripts 2020 <br />
            <a href="http://www.therealscripts.com">
              <p className="name">Amruth Kuntamalla</p>
            </a>
          </small>{" "}
        </div>
      </section>
    </div>
  );
};
export default Footer;
