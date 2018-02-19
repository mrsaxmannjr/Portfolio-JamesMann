import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";

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
          <a href="https://github.com/Readativity/Frontend" target="_blank">
            <div className="project-icon" id="readativity">
              <img className="project-img" src="./assets/readativity.png" alt="Readativity" />
              <div className="overlay">
                <h3>Readativity</h3>
                <p>
                  A mobile-friendly reading productivity app
                </p>
              </div>
            </div>
          </a>
          <a href="https://github.com/CarolynSM/LetMeKnow_Frontend" target="_blank">
            <div className="project-icon" id="let-me-know">
              <img className="project-img" src="./assets/let-me-know.png" alt="Let Me Know" />
              <div className="overlay">
                <h3>Let Me Know</h3>
                <p>
                  A mobile-first guestlist management app for hosts &amp; guests
                </p>
              </div>
            </div>
          </a>
          <a href="https://github.com/CarolynSM/best-wine-friends-frontend" target="_blank">
            <div className="project-icon" id="best-wine-friends">
              <img className="project-img" src="./assets/best-wine-friends.png" alt="Best Wine Friends" />
              <div className="overlay">
                <h3>Best Wine Friends</h3>
                <p>
                  A fun, simple, mobile-friendly wine pairing app
                </p>
              </div>
            </div>
          </a>
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
  padding: 2rem;
  z-index: 0;
}

#projects h2 {
  font-size: 1.7em;
  padding: 2rem;
  text-transform: uppercase;
}

#projects-grid {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.project-icon {
  margin: 2rem;
  position: relative;
  /* z-index: -2; */
}

.project-img {
  display: block;
  height: 30vh;
  width: 20vw;
}

.overlay {
  align-items: center;
  background-color: rgba(247, 217, 208, 0.9);
  color: var(--dark-blue);
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
  transition: 0.5s ease;
}

.project-icon:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  font-size: 1.3em;
  padding: 5rem 0 1rem 0;
  text-transform: uppercase;
}

.overlay p {
  font-size: 1rem;
  line-height: 1.2em;
  padding: 0 1rem;
  text-align: center;

`;
