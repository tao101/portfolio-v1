import React from "react";
import Colors from "../assets/colors";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    const darkMode = this.props.darkMode;
    return (
      <div className="Contact ">
        <h3 style={{ color: Colors(!darkMode, "bgC") }}>
          Feel free to email me via{" "}
          <a href="mailto:leh.lotfi@gmail.com">leh.lotfi@gmail.com</a>
        </h3>

        <h5 style={{ color: Colors(!darkMode, "bgC") }}>
          Or fill in the contact form down below
        </h5>
      </div>
    );
  }
}
