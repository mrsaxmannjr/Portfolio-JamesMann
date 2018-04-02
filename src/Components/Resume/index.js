import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";
import resume from "./James Mann-Resume.jpg";

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
        <img id="resume" src={resume} alt="resume" visibility="hidden" />
        <a href="https://drive.google.com/uc?export=download&id=1NkJonbrpj4eCIDl9m5mpyNPJYHOiHxji">
          <button >Download Resume </button>
        </a>
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
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
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
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
  padding-top: 70px;
  #logo {
    display: none;
  }

  #header-background {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-between;
    -ms-flex-pack: space-between;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    top: 0;
    width: 100%;
    height: 40px;
    position: fixed;
    background: #111;
  }

  #placeholder {
    visibility: hidden;
  }
}

@media (max-width: 543px) {
  padding-top: 40px;
  padding-bottom: 0px;
  min-height: 60vh;

  h1{
    font-size: 38px;
    margin-bottom: 20px;
    font-weight: 900;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: center;
}

  #header-background {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-between;
    -ms-flex-pack: space-between;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    top: 0;
    width: 100%;
    height: 30px;
    position: fixed;
    background: #111;
  }

  #placeholder {
    visibility: hidden;
  }
}
`;
