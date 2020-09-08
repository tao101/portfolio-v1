import React from "react";
import Colors from "../assets/colors";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Contact extends React.Component {
  state = {
    contactName: "",
    contactEmail: "",
    contactMessage: "",
    subscribeEmail: "",
  };

  onNameChange = (e) => {
    this.setState({ contactName: e.target.value });
  };
  onContactEmailChange = (e) => {
    this.setState({ contactEmail: e.target.value });
  };
  onContactMessageChange = (e) => {
    this.setState({ contactMessage: e.target.value });
  };
  onSubscribeEmailChange = (e) => {
    this.setState({ subscribeEmail: e.target.value });
  };

  handleFormSubmit = (e) => {
    const { contactName, contactEmail, contactMessage } = this.state;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: contactName,
        email: contactEmail,
        message: contactMessage,
      }),
    })
      .then(() => alert("Message sent we will Contact you as soon as possible"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  onSubscribe = (e) => {
    alert("thanks for Subscribing");
    e.preventDefault();
  };

  render() {
    const darkMode = this.props.darkMode;
    return (
      <div className="Contact " id="contact">
        <h3 style={{ color: Colors(!darkMode, "bgC") }}>
          Feel free to email me @{" "}
          <a href="mailto:leh.lotfi@gmail.com">leh.lotfi@gmail.com </a>
          <br />
          Or fill in the contact form down below
        </h3>

        <form name="contactForm" onSubmit={this.handleFormSubmit}>
          <p>
            <label className="label">
              <p
                className="name"
                style={{
                  color: Colors(darkMode, "headline"),
                }}
              >
                Your Name:
              </p>
              <input
                className="labelInput"
                value={this.state.contactName}
                onChange={this.onNameChange}
                type="text"
                name="name"
                required
              />
            </label>
          </p>
          <p>
            <label className="label ">
              <p
                className="email"
                style={{
                  color: Colors(darkMode, "headline"),
                }}
              >
                Your Email:
              </p>

              <input
                className="labelInput"
                type="email"
                name="email"
                value={this.state.contactEmail}
                onChange={this.onContactEmailChange}
                required
              />
            </label>
          </p>
          <p>
            <label className="label ">
              <p
                className="message"
                style={{
                  color: Colors(darkMode, "headline"),
                }}
              >
                Message:
              </p>
              <textarea
                className="labelInput"
                name="message"
                value={this.state.contactMessage}
                onChange={this.onContactMessageChange}
                required
              ></textarea>
            </label>
          </p>
          <p>
            <Button
              style={{
                backgroundColor: Colors(darkMode, "blue"),
                color: Colors(darkMode, "white"),
                marginLeft: "0px",
              }}
              className="SendButtons shadow-lg "
              type="submit"
            >
              Send
            </Button>
          </p>
        </form>

        <Card
          className="subsEmailContainer MuiPaper-elevation24"
          style={{ backgroundColor: Colors(darkMode, "bgC") }}
        >
          <h2 className="bigText " style={{ color: Colors(!darkMode, "bgC") }}>
            Subscribe to taoufiqlotfi.tech
          </h2>
          <h4
            className="smallText "
            style={{ color: Colors(!darkMode, "bgC") }}
          >
            And get the latest articles delivered right to your inbox!
          </h4>
          <form className="formContainer" onSubmit={this.onSubscribe}>
            <TextField
              className="emailField"
              id="outlined-basic"
              label="yourEmail@example.com"
              variant="outlined"
              required
              color="secondary"
              type="email"
              InputProps={{
                className: "emailFieldInput",
                style: {
                  color: Colors(!darkMode, "bgC"),
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: Colors(darkMode, "blue"),
                color: Colors(darkMode, "white"),
              }}
              className="buttons shadow-lg "
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}
