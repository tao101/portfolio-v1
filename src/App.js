import React from "react";

import NavBar from "./componenets/NavBar";
import Intro from "./componenets/Intro";
import Skills from "./componenets/Skills";

import Colors from "./assets/colors";
import "./App.css";

class App extends React.Component {
  state = {
    darkMode: false,
  };

  switchDark = () => {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode });
  };
  render() {
    const { darkMode } = this.state;
    const bgColor = Colors(darkMode, "bgC");
    return (
      <div style={{ backgroundColor: bgColor }}>
        <div className="App">
          <NavBar switchDark={this.switchDark} darkMode={darkMode} />
          <Intro darkMode={darkMode} />
          <Skills darkMode={darkMode} />
        </div>
      </div>
    );
  }
}

export default App;
