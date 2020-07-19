import React from "react";

import NavBar from "./componenets/NavBar";

import Colors from "./assets/colors";
import "./App.css";

class App extends React.Component {
  state = {
    darkMode: true,
  };

  switchDark = () => {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode });
  };
  render() {
    const { darkMode } = this.state;
    const bgColor = Colors(darkMode, "bgC");
    return (
      <div style={{ backgroundColor: bgColor }} className="container-xl">
        <div className="App">
          <NavBar switchDark={this.switchDark} darkMode={darkMode} />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
