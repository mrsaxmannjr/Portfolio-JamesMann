import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Header";
import Video from "./Components/Video";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <GridDiv className="App">
            <Header />
            <Video />
            <Main />
            <Footer />
          </GridDiv>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

const GridDiv = styled.div`
Header, Main, Footer {
  z-index: 1;
}

`;
