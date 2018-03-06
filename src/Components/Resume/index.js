import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import { Link } from "react-router-dom";
import logo from "./js.png";
import resumePNG from "./James Mann - resume.png";

const Resume = () => (
  <TheResume>
    <div id="header-background">
      <p id="placeholder">placeholder</p>
    </div>
    <span>
      <Overdrive id="img" duration="700">
        <img id="logo" src={logo} alt="JM Logo" />
      </Overdrive>
    </span>
    <div>
      <h1>RESUME</h1>
      <div id="resumes">
        <img id="resume" src={resumePNG} alt="resume" visibility="hidden" />
        <Link to="https://docs.google.com/document/d/1YArtUBpybs7357zETfrQdEawWwP7pfeV/export?format=pdf">
          <button >Download Resume </button>
        </Link>
      </div>
    </div>
  </TheResume>
);

export default Resume;

const TheResume = styled.div`
max-width: 960px;
margin: 45px auto;
margin-top: 0px;
min-height: 70vh;
padding: 80px 5% 0px;
padding-top: 130px;

img {
  height: 127px;
}

#resumes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#resume {
  width: 100%;
  height: 100%;
}

button {
  margin: 10px;
  margin-bottom: 6px;
  height: 30px;
  width: 200px;
  border-radius: 2%;
  font-size:20px;
  border: solid var(--JS-yellow);
  background: var(--JS-yellow);
}

span {
  position: fixed;
  top: 0px;
  right: 155px;
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

#header-background {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  height: 127px;
  position: fixed;
  background: var(--black);;
}

#placeholder {
  visibility: hidden;
}

@media (max-width: 666px) {
  #logo {
    display: none;
  }
}
`;
