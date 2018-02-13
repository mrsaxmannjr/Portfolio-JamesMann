import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <TheMain>
        <h1 id="intro">I am James</h1>
        <p>
      I make stuff
        </p>
      </TheMain>
    );
  }
}

export default Main;

const TheMain = styled.div`
max-width: 960px;
margin: 60px auto;
min-height: 70vh;
padding: 100px 5% 80px;

#intro{
  margin-top: 40px;
  font-size: 64px;
  font-weight: 300;
  line-height: 1.2;
  }
`;
