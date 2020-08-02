import React from "react";
import "./Skills.css";
import Colors from "../assets/colors";

export default class Skills extends React.Component {
  render() {
    const darkMode = this.props.darkMode;
    return (
      <div
        className="skills "
        style={{ backgroundColor: Colors(darkMode, "skills") }}
      >
        <h1 style={{ color: Colors(!darkMode, "bgC") }}>Skills</h1>
        <div className="container-lx intro Home">
          <div className="row">
            <div className="col-sm item">
              <img
                src={require("../assets/webDev.svg")}
                className="img-fluid skillImg"
              />

              <h3
                className="itemTitle"
                style={{ color: Colors(!darkMode, "bgC") }}
              >
                Full stack development
              </h3>
            </div>
            <div className="col-sm item">
              <img
                src={require("../assets/mobDev.svg")}
                className="img-fluid skillImg"
              />
              <h3
                className="itemTitle"
                style={{ color: Colors(!darkMode, "bgC") }}
              >
                Mobile App Development
              </h3>
            </div>
            <div className="col-sm item">
              <img
                src={require("../assets/ui.svg")}
                className="img-fluid skillImg"
              />
              <h3
                className="itemTitle"
                style={{ color: Colors(!darkMode, "bgC") }}
              >
                UI/UX Design
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
