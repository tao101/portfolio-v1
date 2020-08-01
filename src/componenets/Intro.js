import React from "react";
import Button from "@material-ui/core/Button";
import Colors from "../assets/colors";

export default class Intro extends React.Component {
  render() {
    const resumeUrl = "https://smakosh.com/";
    const darkMode = this.props.darkMode;
    return (
      <div className="container-xl intro Home">
        <h1 className="h1" style={{ color: Colors(darkMode, "headline") }}>
          I'm Lotfi Taoufiq
        </h1>
        <br />
        <h4>
          <small class="text-muted">
            I'm a self-taught developer, and I like making applications of
            different varieties. I help founders add value to society by
            crafting software using JavaScript tools, I love open source and
            building side projects.
          </small>
        </h4>
        <br />
        <br />
        <div>
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: Colors(darkMode, "white"),
              color: Colors(darkMode, "blue"),
            }}
            className="button shadow-lg"
            href={resumeUrl}
          >
            Resume
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: Colors(darkMode, "blue"),
              color: Colors(darkMode, "white"),
            }}
            className="button shadow-lg"
            href="#Contact"
          >
            Get In Touch
          </Button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
