import React from "react";
import Colors from "../assets/colors";
import "./Projects.css";

import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from "@material-ui/core";

import ontwik from "../assets/ontwik.png";

import portfolio from "../assets/portfolio.png";
import celebsLikeme from "../assets/celebsLikeme.png";
import phoneSanitizer from "../assets/phoneSanitizer.png";
import pomodoro from "../assets/pomodoro.png";

export default class Projects extends React.Component {
  render() {
    const darkMode = this.props.darkMode;
    return (
      <div
        className="Projects "
        id="projects"
        style={{ backgroundColor: Colors(darkMode, "skills") }}
      >
        <div className="container-xl paddingFIx">
          <h1 style={{ color: Colors(!darkMode, "bgC") }}>Featured Projects</h1>
          <div className="projectContainer row">
            <CostumCard
              darkMode={darkMode}
              img={portfolio}
              title="My personal portfolio (This Website)"
              link="https://www.taoufiqlotfi.tech/"
              description="An open source portfolio for developers"
            />

            <CostumCard
              darkMode={darkMode}
              img={pomodoro}
              title="Pomodoro Timer"
              link="https://github.com/tao101/pomodoroTimer"
              description="Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser."
            />
          </div>
          <div className="projectContainer row">
            <CostumCard
              darkMode={darkMode}
              img={celebsLikeme}
              title="Celebs Like Me (Android/ios)"
              link="https://github.com/tao101/celebritiesLookAlLike"
              description="Celebs Like Me is a React Native app that determines which celebrities look like you. It uses aws celebrity recognition based on a deep neural network to search through a database of over 20 000 celebrities. then it genearates an image you could save on your device or share on social media."
            />

            <CostumCard
              darkMode={darkMode}
              img={phoneSanitizer}
              title="Automatic Smartphone Sanitizer"
              link="https://www.youtube.com/watch?v=PLFQhczCU-g"
              description="This project intends to create a low budget and portable device that can effectively use UV light and to disinfect smartphones and masks from SARS-CoV-2 virus and that can be easily reproduced by people who need it."
            />
          </div>
        </div>
      </div>
    );
  }
}

function CostumCard(props) {
  const darkMode = props.darkMode;
  const img = props.img;
  const title = props.title;
  const description = props.description;
  const link = props.link;

  return (
    <a className="col-sm item" href={link}>
      <Card
        className="card MuiPaper-elevation24"
        style={{ backgroundColor: Colors(darkMode, "bgC") }}
      >
        <CardHeader title={title} style={{ color: Colors(!darkMode, "bgC") }} />
        <CardMedia className="cardImg img-fluid" image={img} title={title} />
        <CardContent>
          <Typography style={{ color: Colors(!darkMode, "bgC") }}>
            {description}
          </Typography>
          <div></div>
        </CardContent>
      </Card>
    </a>
  );
}
