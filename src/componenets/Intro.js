import React from "react";
import Button from "@material-ui/core/Button";
import Colors from "../assets/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Intro extends React.Component {
  render() {
    const resumeUrl = "https://smakosh.com/";
    const darkMode = this.props.darkMode;
    return (
      <div className="container-xl  Home " id="Home">
        <div className="introContainer">
          <h1
            className="introTitle"
            style={{ color: Colors(darkMode, "headline") }}
          >
            I'm Lotfi Taoufiq
          </h1>
          <br />

          <h4 className="description text-muted">
            I'm a self-taught full stack JavaScript developer, and I like making
            applications of different varieties. I help founders add value to
            society by crafting software using JavaScript tools, I'm really
            interested in Technology & solving technical problems. I love open
            source and building side projects.
          </h4>

          <br />

          <div className="buttonsContainer">
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: Colors(darkMode, "blue"),
                color: Colors(darkMode, "white"),
              }}
              className="button shadow-lg "
              href={resumeUrl}
            >
              Resume
            </Button>
            <Button
              variant="contained"
              size="large"
              style={{
                borderColor: Colors(darkMode, "blue"),
                color: Colors(darkMode, "blue"),
                borderWidth: "2px",
                backgroundColor: "transparent",
                borderStyle: "solid",
              }}
              className="button shadow-lg"
              href="#contact"
            >
              Get In Touch
            </Button>
            <a className="expandContainer" href="#skills">
              <ExpandMoreIcon className="expand" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
