import React from "react";

import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { Nav } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";

import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";
import "./NavBar.css";
import Colors from "../assets/colors";

class NavBar extends React.Component {
  onDarkMode = () => {
    this.props.switchDark();
  };

  render() {
    const darkMode = this.props.darkMode ? "dark" : "light";

    const logo = !this.props.darkMode ? logoDark : logoWhite;

    const darkModeIcon = !this.props.darkMode ? (
      <Brightness3Icon
        onClick={this.onDarkMode}
        className="darkMode"
      ></Brightness3Icon>
    ) : (
      <Brightness5Icon
        onClick={this.onDarkMode}
        className="darkMode"
      ></Brightness5Icon>
    );
    return (
      <Navbar
        variant={darkMode}
        expand="lg"
        style={{ backgroundColor: Colors(this.props.darkMode, "bgC") }}
        className=" navBar shadow-lg navbar-slide-nav "
        collapseOnSelect
        fixed="top"
        sticky="top"
      >
        <div className="container-xl">
          <Navbar.Brand href="#Home">
            <img
              src={logo}
              width="60"
              height="60"
              loading="lazy"
              alt="Taoufiq Lotfi portfolio"
              className="d-inline-block align-top logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navbar-slide offcanvas">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#education">Education & Languages</Nav.Link>
              <Nav.Link href="#projects">Featured Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link>{darkModeIcon}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
