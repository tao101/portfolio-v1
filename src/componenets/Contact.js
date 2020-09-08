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
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  render() {
    const darkMode = this.props.darkMode;
    return (
      <div className="Contact ">
        <h3 style={{ color: Colors(!darkMode, "bgC") }}>
          Feel free to email me @{" "}
          <a href="mailto:leh.lotfi@gmail.com">leh.lotfi@gmail.com </a>
        </h3>

        <form name="contactForm" onSubmit={this.handleFormSubmit}>
          <p>
            <label>
              Your Name:{" "}
              <input
                value={this.state.contactName}
                onChange={this.onNameChange}
                type="text"
                name="name"
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={this.state.contactEmail}
                onChange={this.onContactEmailChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={this.state.contactMessage}
                onChange={this.onContactMessageChange}
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        <h5 style={{ color: Colors(!darkMode, "bgC") }}>
          <a href="https://image.winudf.com/v2/image/bXBsLmNvbS5jb21pbmdzb29uX3NjcmVlbl8wXzE1MzQ3NTgxODFfMDQ0/screen-0.jpg?fakeurl=1&type=.jpg">
            Why there is no Contact Form ?
          </a>
        </h5>

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
          <form className="formContainer" noValidate autoComplete="off">
            <TextField
              className="emailField"
              id="outlined-basic"
              label="yourEmail@example.com"
              variant="outlined"
              required
              color="secondary"
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: Colors(darkMode, "blue"),
                color: Colors(darkMode, "white"),
              }}
              className="buttons shadow-lg "
            >
              Subscribe
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}
