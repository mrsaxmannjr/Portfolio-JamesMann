import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./js.png";
import read from "./readimg.jpg";
import dbfz from "./dbfzimg.jpg";
import dojo from "./dojoimg.jpg";
import whear from "./whearimg.jpg";

class Modal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
    <section id="projects" name="projects">
      <div id="projects-grid">
        <div onClick={this.handleOpen}>
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
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
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
        </Dialog>
        </div>

      <div onClick={this.handleOpen}>
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
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
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
        </Dialog>
        </div>

      <div onClick={this.handleOpen}>
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
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
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
        </Dialog>
      </div>
      <div onClick={this.handleOpen}>
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
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
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
          </Dialog>
        </div>
      </div>
    </section>
    );
  }
}

export default Modal;