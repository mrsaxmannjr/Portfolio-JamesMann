import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./js.png";


class Main extends Component {
  render() {
    return (
      <TheMain>
        <img src={logo} />
        <h1 id="intro">James Mann</h1>
        <p>
      I am a developer, musician, martial artist and gamer.
        </p>
      </TheMain>
    );
  }
}

export default Main;

const TheMain = styled.div`
max-width: 960px;
margin: 45px auto;
min-height: 70vh;
padding: 80px 5% 80px;
img {
  position: absolute;
  height: 570px;
  opacity: .4;
  z-index: -1;
}

#intro{
  margin-top: 100px;
  font-size: 64px;
  font-weight: 300;
  line-height: 1.2;
  }
`;
