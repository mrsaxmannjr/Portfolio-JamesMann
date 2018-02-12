import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <TheMain>
        <h1>I am James</h1>
        <p>
      I am a Full Stack Web Developer
        </p>
      </TheMain>
    );
  }
}

export default Main;

const TheMain = styled.div`
grid-area: 2 / 1 / 3 / -1;
  padding: 0 10% 200px;
  align-self: center;
`;
