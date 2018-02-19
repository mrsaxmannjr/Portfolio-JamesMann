import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";
import readLogo from "./read.jpg";
import dbfzpic from "./dbfz.jpg";

const Projects = () => (
  <TheProjects>
    <span>
      <Overdrive id="img" duration="700">
        <img src={logo} />
      </Overdrive>
    </span>
    <div>
      <h1>PROJECTS</h1>
      <section id="projects" name="projects">
        <div id="projects-grid">
          <Link to="https://readativity-app.herokuapp.com/" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={readLogo} alt="Readativity" />
              <div className="overlay">
                <h2>Readativity</h2>
                <p>
                Readativity is where reading meets productivity! This app encourages you to read more while making the most of your time. You can keep track of how long you read everyday and check how much you read over the week.
                </p>
              </div>
            </div>
          </Link>
          <Link to="https://dbfzguide.com/" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={dbfzpic} alt="Readativity" />
              <div className="overlay">
                <h2>DBFZ Guide</h2>
                <p>
                A companion app for the videogame Dragon Ball FighterZ. Welcome to the one-stop-shop for all your Dragon Ball FighterZ needs! Here you can find details on how to play, the different control schemes, character stats and move-sets, create a custom team and more!
                </p>
              </div>
            </div>
          </Link>
          <Link to="https://github.com/Readativity/Frontend" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={readLogo} alt="Readativity" />
              <div className="overlay">
                <h2>Readativity</h2>
                <p>
                  A mobile-friendly reading productivity app
                </p>
              </div>
            </div>
          </Link>
          <Link to="https://github.com/Readativity/Frontend" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={readLogo} alt="Readativity" />
              <div className="overlay">
                <h2>Readativity</h2>
                <p>
                  A mobile-friendly reading productivity app
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  </TheProjects>
);

export default Projects;

const TheProjects = styled.div`
max-width: 960px;
margin: 45px auto;
margin-top: 0px;
min-height: 70vh;
padding: 80px 5% 0px;
padding-top: 130px;

img {
  height: 127px;
}

span {
  position: fixed;
  top: 0px;
  right: 168px;
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

#projects {
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 0;
}

#projects h2 {
  font-size: 1.7em;
  font-weight: 900;
  padding: 2rem;
  text-transform: uppercase;
  -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
}

#projects-grid {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.project-icon {
  margin: 1rem;
  position: relative;
}

.project-img {
  display: block;
  height: 320px;
  width: 320px;
}

.overlay {
  align-items: center;
  background-color: rgba(244, 219, 93, 1);
  color: black;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .7s ease;
}

.project-icon:hover .overlay {
  opacity: 1;
}



.overlay p {
  font-size: 1rem;
  line-height: 1.2em;
  padding: 0 1rem;
  text-align: center;

`;
