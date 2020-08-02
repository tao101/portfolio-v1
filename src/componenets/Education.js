import React from "react";
import Colors from "../assets/colors";
import "./Education.css";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import c from "programming-languages-logos/src/c/c.svg";
import cpp from "programming-languages-logos/src/cpp/cpp.svg";
import css from "../assets/css.svg";
import html from "programming-languages-logos/src/html/html.svg";
import java from "programming-languages-logos/src/java/java.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";

export default class Education extends React.Component {
  render() {
    const darkMode = this.props.darkMode;

    return (
      <div className="row container-lx intro Home">
        <div className="col-sm item">
          <h3 style={{ color: Colors(darkMode, "headline") }}>Education</h3>
          <Card
            className="card"
            style={{ backgroundColor: Colors(darkMode, "bgLight") }}
          >
            <CardContent>
              <h3 style={{ color: Colors(darkMode, "headline") }}>
                BSc in Computer Engineering
              </h3>
              <Typography color="textSecondary">
                @ Kharkiv National University of Radio Electronics
              </Typography>
            </CardContent>
          </Card>
          <Card
            className="card"
            style={{ backgroundColor: Colors(darkMode, "bgLight") }}
          >
            <CardContent>
              <h3 style={{ color: Colors(darkMode, "headline") }}>
                Android Basics by Google
              </h3>
              <Typography color="textSecondary">@ udacity</Typography>
            </CardContent>
          </Card>
          <Card
            className="card"
            style={{ backgroundColor: Colors(darkMode, "bgLight") }}
          >
            <CardContent>
              <h3 style={{ color: Colors(darkMode, "headline") }}>
                Become an Android Developer
              </h3>
              <Typography color="textSecondary">@ udacity</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-sm item">
          <h3 style={{ color: Colors(darkMode, "headline") }}>
            Language And Frameworks I speak
          </h3>
          <div className="row languages">
            <div className="avatarContainer">
              <Avatar className="avatar" alt="c" src={c} />
            </div>
            <div className="avatarContainer">
              <Avatar className="avatar" alt="cpp" src={cpp} />
            </div>
            <div className="avatarContainer">
              <Avatar className="avatar" alt="javascript" src={javascript} />
            </div>
            <div className="avatarContainer">
              <Avatar className="avatar" alt="java" src={java} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
