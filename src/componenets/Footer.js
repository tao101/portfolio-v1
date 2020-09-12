import React from "react";
import Colors from "../assets/colors";
import "./Footer.css";

import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram-icon.svg";
import github from "../assets/github-icon.svg";
import linkedin from "../assets/linkedin.svg";
import react from "../assets/react.svg";
import netlify from "../assets/netlify.svg";

export default class Footer extends React.Component {
  render() {
    const darkMode = this.props.darkMode;
    const logo = !this.props.darkMode ? logoDark : logoWhite;
    return (
      <div>
        <div className="Footer">
          <div className="container-xl content">
            <div className="footerLogo">
              <img
                src={logo}
                width="100"
                height="100"
                loading="lazy"
                alt="Taoufiq Lotfi portfolio"
                className="d-inline-block align-top logo "
              />
            </div>
            <div className="footerSocail">
              <h1
                style={{ color: Colors(darkMode, "headline") }}
                className="footerTitle"
              >
                FIND ME ON SOCIAL NETWORKS
              </h1>
              <div className="centerIcons">
                <a href="https://www.facebook.com/Live-Coding-With-Tao-105360017937724">
                  <img
                    src={facebook}
                    loading="lazy"
                    alt="Taoufiq Lotfi portfolio"
                    className="d-inline-block align-top logo iconSocail"
                  />
                </a>
                <a href="https://www.instagram.com/livecodingwithtao/">
                  <img
                    src={instagram}
                    loading="lazy"
                    alt="Taoufiq Lotfi portfolio"
                    className="d-inline-block align-top logo iconSocail"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UC2mzPQ9uLVEi_7QOWIdnI1g">
                  <img
                    src={youtube}
                    loading="lazy"
                    alt="Taoufiq Lotfi portfolio"
                    className="d-inline-block align-top logo iconSocail"
                  />
                </a>
                <a href="https://github.com/tao101">
                  <img
                    src={github}
                    loading="lazy"
                    alt="Taoufiq Lotfi portfolio"
                    className="d-inline-block align-top logo iconSocail"
                  />
                </a>
                <a href="https://www.linkedin.com/in/taoufiq-lotfi-2365094b/">
                  <img
                    src={linkedin}
                    width="120"
                    height="60"
                    loading="lazy"
                    alt="Taoufiq Lotfi portfolio"
                    className="d-inline-block align-top logo iconSocail linkdin"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footerCopyright container-xl">
          <h1
            className="footerCopyrightTitle"
            style={{ color: Colors(darkMode, "headline") }}
          >
            © taoufiqlotfi.tech built with{" "}
          </h1>
          <img
            src={react}
            width="20"
            height="20"
            loading="lazy"
            alt="Taoufiq Lotfi portfolio"
            className="d-inline-block align-top logo iconSocailSmall"
          />
          <h1
            className="footerCopyrightTitle"
            style={{ color: Colors(darkMode, "headline") }}
          >
            Open sourced on{" "}
          </h1>
          <img
            src={github}
            width="20"
            height="20"
            loading="lazy"
            alt="Taoufiq Lotfi portfolio"
            className="d-inline-block align-top logo iconSocailSmall"
          />{" "}
          <h1
            className="footerCopyrightTitle"
            style={{ color: Colors(darkMode, "headline") }}
          >
            and deployed on{" "}
          </h1>
          <img
            src={netlify}
            width="20"
            height="20"
            loading="lazy"
            alt="Taoufiq Lotfi portfolio"
            className="d-inline-block align-top logo iconSocailSmall"
          />
        </div>
      </div>
    );
  }
}
