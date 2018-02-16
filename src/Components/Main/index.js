import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";
import Video from "../Video";

const Main = () => (
  <div>
    <Video />
    <TheMain>
      <h1 id="intro">I am James Mann</h1>
      <p>I am a developer, musician, martial artist and gamer.</p>
      <Overdrive id="img" duration="700">
        <img src={logo} />
      </Overdrive>
    </TheMain>
  </div>
);

export default Main;

const TheMain = styled.div`
max-width: 960px;
margin: 45px auto;
min-height: 70vh;
padding: 80px 5% 0px;

img {
  height: 250px;
}

#intro{
  margin-top: 30px;
  font-size: 64px;
  font-weight: 300;
  line-height: 1.2;
  }
`;
