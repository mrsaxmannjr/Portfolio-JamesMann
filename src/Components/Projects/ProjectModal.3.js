import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./js.png";
import dojo from "./dojoimg.jpg";

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
              <img className="project-img" src={dojo} alt="Dojo Sense" />
              <div className="overlay">
                <h2>Dojo Sense</h2>
              </div>
            </div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div className="project-icon" >
              <img className="project-img" src={dojo} alt="Dojo Sense" />
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
      </div>
    </section>
    );
  }
}

export default Modal;
