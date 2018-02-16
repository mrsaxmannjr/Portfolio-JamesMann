import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";

const Resume = () => (
  <TheResume>
    <span>
      <Overdrive id="img" duration="700">
        <img src={logo} />
      </Overdrive>
    </span>
    <div>
      <h1>RESUME</h1>
      <p>
      I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.I am a developer, musician, martial artist and gamer.
      </p>
    </div>
  </TheResume>
);

export default Resume;

const TheResume = styled.div`
max-width: 960px;
margin: 45px auto;
min-height: 70vh;
padding: 80px 5% 0px;

img {
  height: 127px;
}

span {
  position: absolute;
  top: 0px;
  right: 314px;
}

h1{
    font-size: 38px;
    margin-bottom: 30px;
    font-weight: 900;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: center;
}
`;
