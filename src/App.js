import React, { Component } from "react";
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
        <GridDiv className="App">
          <Header />
          <Video />
          <Main />
          <Footer />
        </GridDiv>
      </Router>
    );
  }
}

export default App;

const GridDiv = styled.div`
display: grid;
height: 100vh;
grid-template: 52px 1fr 100px / auto;
background: #222;
  color: #fff;
Header, Main, Footer {
  z-index: 1;
}

`;
