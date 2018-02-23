import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";
import read from "./readimg.jpg";
import dbfz from "./dbfzimg.jpg";
import dojo from "./dojoimg.jpg";
import whear from "./whearimg.jpg";

const Projects = () => (
  <TheProjects>
    <div id="header-background">
      <p id="placeholder">placeholder</p>
    </div>
    <span>
      <Overdrive id="img" duration="700">
        <img src={logo} />
      </Overdrive>
    </span>
    <div id="push-footer">
      <h1>PROJECTS</h1>
      <section id="projects" name="projects">
        <div id="projects-grid">
          <Link to="https://readativity-app.herokuapp.com/" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={read} alt="Readativity" />
              <div className="overlay">
                <h2>Readativity</h2>
                <p>
                Readativity is where reading meets productivity!
                </p>
                <p>
                This app encourages you to read more while making the most of your time. You can keep track of how long you read everyday and check how much you read over the week.
                </p>
                <div className="tech">
                  <h3>Technologies</h3>
                  <p>React.js, Chart.js, HTML5, CSS3, JavaScript(ES6), Node.js, PostgreSQL, Knex.js, Express.js, Heroku, Cypress, Google News API, Git/Github, Agile Workflow, Pair Programming</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="https://dbfzguide.com/" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={dbfz} alt="Readativity" />
              <div className="overlay">
                <h2>DBFZ Guide</h2>
                <p>
                A companion app for the videogame Dragon Ball FighterZ!
                </p>
                <p>
                Welcome to the one-stop-shop for all your Dragon Ball FighterZ needs! Here you can find details on how to play, the different control schemes, character stats and move-sets, create a custom team and more!
                </p>
                <div className="tech">
                  <h3>Technologies</h3>
                  <p>HTML5, CSS3, JavaScript(ES6), Node.js, Express.js, Firebase, D3.js, Materialize CSS, Mocha/Chai/Assert, Git/Github</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="https://tower-fe.herokuapp.com/" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={dojo} alt="Readativity" />
              <div className="overlay">
                <h2>Dojo Sense</h2>
                <p>
                  Use Dojo Sense to browse different Martial Art styles, see an overview video, read a description and find dojos(schools) that teach the selected art.  The school location will be plotted on Google maps.
                </p>
                <p>
                  Dojo Sense is backed by a custom built API with full CRUD functionality.
                </p>
                <div className="tech">
                  <h3>Technologies</h3>
                  <p>React.js, HTML5, CSS3, JavaScript(ES6), Node.js, PostgreSQL, Knex.js, Express.js, Heroku, google-map-react, Cypress, Git/Github</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="https://whear-a7bc7.firebaseapp.com/" target="_blank">
            <div className="project-icon" >
              <img className="project-img" src={whear} alt="Readativity" />
              <div className="overlay">
                <h2>Whear.com</h2>
                <p>
                Whear.com suggests outfits for men based on specific event types while dynamically populating all items.
                </p>
                <p>
                The winning app for the Dec. 2017 g70 Hackathon based on the theme "Where.com".  Built by a 4 person team with a 5 hour time constraint.
                </p>
                <div className="tech">
                  <h3>Technologies</h3>
                  <p>HTML5, CSS3, Materialize CSS, Heroku, Firebase, Express.js, Adobe Photoshop, Git/Github</p>
                </div>
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

h1 {
    font-size: 38px;
    margin-bottom: 30px;
    font-weight: 900;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: center;
}

h3 {
  font-size: 18px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 900;
  padding: .5rem;
  padding-top: .25rem;
  padding-bottom: 0px;
  margin-bottom: -5px;
  color: #fff;
}

#projects {
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 0;
}

#projects h2 {
  font-size: 1.7em;
  text-decoration: underline;
  font-weight: 900;
  padding: .5rem;
  padding-bottom: 0rem;
  text-transform: uppercase;
  -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    color: #fff;
}

#projects-grid {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.project-icon {
  margin: 0rem;
  position: relative;
}

.project-img {
  display: block;
  height: 355px;
  width: 355px;
  border: solid rgba(244, 219, 93, 1);
}

.overlay {
  align-items: center;
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
  transition: .5s ease;
  background-color: #F4DB5D;

}

.project-icon:hover .overlay {
  opacity: 1;
}

.overlay p {
  font-size: 1rem;
  line-height: 1.2em;
  padding: 0 .35rem;
  margin-bottom: .55rem;
  text-align: center;
}

.tech p {
  font-style: italic;
  font-size: 17px;
}

#projects-grid > a:nth-child(2) > div > img {
  border-left: none;
  border-right: none;
}

#projects-grid > a:nth-child(3) > div > img {
  border-right: none;
}

#push-footer {
  margin-bottom: 98px;
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
  background: #111;
}

#placeholder {
  visibility: hidden;
}
`;
