import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import ProjectModal1 from "./ProjectModal.1";
import ProjectModal2 from "./ProjectModal.2";
import ProjectModal3 from "./ProjectModal.3";
import ProjectModal4 from "./ProjectModal.4";
import logo from "./js.png";

const Projects = () => (
  <TheProjects>
    <div id="header-background">
      <p id="placeholder">placeholder</p>
    </div>
    <span>
      <Overdrive id="img" duration="700">
        <img src={logo} alt="JM Logo" />
      </Overdrive>
    </span>
    <div id="push-footer">
      <h1>PROJECTS</h1>
      <section id="projects" name="projects">
        <div id="grid">
          <ProjectModal1 />
          <ProjectModal2 />
          <ProjectModal3 />
          <ProjectModal4 />
        </div>
      </section>
    </div>
  </TheProjects>
);

export default Projects;

const TheProjects = styled.div`
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
  right: 302px;
}

h1 {
    font-size: 38px;
    margin-bottom: 70px;
    font-weight: 900;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: center;
}

#projects {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: 0;
}

#grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100vw;
}

#projects h2 {
  font-size: 1.7em;
  text-decoration: underline;
  font-weight: 900;
  padding: .5rem;
  padding-bottom: 0rem;
  padding-top: 115px;
  text-transform: uppercase;
  -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    color: var(--black);
}

.project-icon {
  margin: 0rem;
  position: relative;
}

.project-img {
  display: block;
  height: 300px;
  width: 300px;
  border: solid var(--JS-yellow);
}

.overlay {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  -webkit-transition: .5s ease;
  -o-transition: .5s ease;
  transition: .5s ease;
  background-color: var(--JS-yellow);
}

.project-icon:hover .overlay {
  opacity: .7;
}

#push-footer {
  margin-bottom: 97px;
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
  background: #111;
}

#placeholder {
  visibility: hidden;
}

@media (max-width: 1260px) {
  #grid {
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
    width: 100vw;
    height: 1300px;
  }
}

@media (max-width: 812px) {
  .project-icon .overlay {
    opacity: .7;
  }

}

@media (max-width: 666px) {
  padding-top: 70px;
  img {
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

  h1 {
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
