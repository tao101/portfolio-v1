import React from "react";
import Colors from "../assets/colors";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    const darkMode = this.props.darkMode;
    return (
      <div className="Contact ">
        <h3 style={{ color: Colors(!darkMode, "bgC") }}>Contact</h3>
      </div>
    );
  }
}
