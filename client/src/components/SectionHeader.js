import React, { useState, useEffect } from "react";
import "../css/header.css";
const SectionHeader = ({ logo }) => {
  const [blinker, setBlinker] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setBlinker(!blinker);
    }, 1000);
  });
  return (
    <div className="sectionHeader">
      <section className="App-header">
        <div className="container top-layer">
          <div className="row pt-5 h-100">
            <div className="col-md-6 pt-3" style={{ margin: "auto" }}>
              <img
                src={logo}
                width="360px"
                className="App-logo mt-5 img-fluid"
                alt="logo"
              />
            </div>
            <div
              className="col-md-6 pt-3 intro-text text-white"
              style={{ margin: "auto" }}
            >
              {/* <div>Amruth Kuntamalla</div> */}
              <div>
                Security is a process, not a product..{blinker ? "!" : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SectionHeader;
