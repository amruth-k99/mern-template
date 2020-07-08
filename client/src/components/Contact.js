import React, { Component } from "react";
import TextField from "./TextField";
import Button from "./Button";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${
      (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;

    return (
      <footer
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "orange",
        }}
      >
        <div className="heading text-white">Contact Me</div>
        <div className="container justify-content-center">
          <div>
            <form name="sentMessage" id="contactForm">
              <div className="m-2 p-2">
                <TextField
                  id={1}
                  label="Name"
                  predicted="Sam Sepiol"
                  locked={false}
                  active={false}
                />
              </div>
              <div className="m-2 p-2">
                <TextField
                  id={2}
                  label="Email"
                  predicted="Sam Sepiol"
                  locked={false}
                  active={false}
                />
              </div>
              <div className="m-2 p-2">
                <TextField
                  id={3}
                  label="Mobile"
                  predicted="Sam Sepiol"
                  locked={false}
                  active={false}
                />
              </div>
              <div className="m-2 p-2">
                <TextField
                  id={4}
                  label="Message"
                  predicted="Sam Sepiol"
                  locked={false}
                  active={false}
                />
              </div>
              <div id="success"></div>
              <div className="form-group">
                <Button
                  name="submit"
                  title="Connect!"
                  onPressButton={(s) => console.log(s)}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}
