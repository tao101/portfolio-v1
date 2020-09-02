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

export default class Projects extends React.Component {
  render() {
    const darkMode = this.props.darkMode;
    return (
      <div
        className="Projects "
        style={{ backgroundColor: Colors(darkMode, "skills") }}
      >
        <h1 style={{ color: Colors(!darkMode, "bgC") }}>Featured Projects</h1>
        <div className="projectContainer row">
          <CostumCard
            darkMode={darkMode}
            img={ontwik}
            title="ontwik"
            description="Collect stars & avoid obstacles while trying to put the ball into the right basket to unlock new levels!"
          />

          <CostumCard
            darkMode={darkMode}
            img={ontwik}
            title="ontwik"
            link="https://ontwik-dev.com/founders"
            description="Collect stars & avoid obstacles while trying to put the ball into the right basket to unlock new levels!"
          />
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

  return (
    <div className="col-sm item">
      <Card
        className="card"
        style={{ backgroundColor: Colors(darkMode, "bgC") }}
      >
        <CardHeader title={title} style={{ color: Colors(!darkMode, "bgC") }} />
        <CardMedia className="cardImg img-fluid" image={img} title={title} />
        <CardContent>
          <Typography style={{ color: Colors(!darkMode, "bgC") }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
