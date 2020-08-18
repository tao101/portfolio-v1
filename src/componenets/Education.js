import React from "react";
import Colors from "../assets/colors";
import "./Education.css";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import csharp from "programming-languages-logos/src/csharp/csharp.svg";
import cpp from "programming-languages-logos/src/cpp/cpp.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import mobx from "../assets/mobx.svg";
import reactNative from "../assets/reactNative.png";
import html from "programming-languages-logos/src/html/html.svg";
import java from "programming-languages-logos/src/java/java.svg";
import swift from "programming-languages-logos/src/swift/swift.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import nodejs from "../assets/nodejs-icon.svg";
import electron from "../assets/electron.svg";
import git from "../assets/git-icon.svg";
import bootstarp from "../assets/bootstrap.svg";
import parse from "../assets/parse.svg";
import mysql from "../assets/mysql.svg";
import firebase from "../assets/firebase.svg";
import expo from "../assets/expo.svg";
import cordova from "../assets/cordova.svg";
import es6 from "../assets/es6.svg";

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
                Become an Android Developer
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
                Become an Ios Developer
              </h3>
              <Typography color="textSecondary">@ udacity</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-sm item ">
          <h3 style={{ color: Colors(darkMode, "headline") }}>
            Language And Frameworks I speak
          </h3>
          <div className="centerX">
            <div className="row">
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="cpp"
                  src={cpp}
                  title="c++"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  c++
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="csharp"
                  src={csharp}
                  title="c#"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  c#
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="java"
                  src={javascript}
                  title="javascript"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  javascript
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="java"
                  src={java}
                  title="java"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  java
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="swift"
                  src={swift}
                  title="swift"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  swift
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="html"
                  src={html}
                  title="html"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  html
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="css"
                  src={css}
                  title="css"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  css
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="bootstarp"
                  src={bootstarp}
                  title="bootstarp"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  bootstarp
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="react"
                  src={react}
                  title="react"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  react
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="mobx"
                  src={mobx}
                  title="mobx"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  mobx
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="reactNative"
                  src={reactNative}
                  title="reactNative"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  react Native
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="expo"
                  src={expo}
                  title="expo"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  expo
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="electron"
                  src={electron}
                  title="electron"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  electron
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="nodejs"
                  src={nodejs}
                  title="nodejs"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  nodejs
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="es6"
                  src={es6}
                  title="es6"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  es6
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="parse"
                  src={parse}
                  title="parse"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  parse server
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="mysql"
                  src={mysql}
                  title="mysql"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  mysql
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="firebase"
                  src={firebase}
                  title="firebase"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  firebase
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="git"
                  src={git}
                  title="git"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  git
                </h4>
              </div>
              <div className="col-2 logos">
                <img
                  className="avatar img-fluid"
                  alt="cordova"
                  src={cordova}
                  title="cordova"
                />
                <h4
                  className="name"
                  style={{ color: Colors(darkMode, "headline") }}
                >
                  cordova
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
