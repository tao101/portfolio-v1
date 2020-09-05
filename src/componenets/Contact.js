import React from "react";
import Colors from "../assets/colors";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";

export default class Contact extends React.Component {
  render() {
    const darkMode = this.props.darkMode;
    return (
      <div className="Contact ">
        <h3 style={{ color: Colors(!darkMode, "bgC") }}>
          Feel free to email me @{" "}
          <a href="mailto:leh.lotfi@gmail.com">leh.lotfi@gmail.com </a>
        </h3>

        <form name="contactForm" method="post" netlify data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
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
