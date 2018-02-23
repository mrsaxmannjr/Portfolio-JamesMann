import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./js.png";
import dbfz from "./dbfzimg.jpg";


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
              <img className="project-img" src={dbfz} alt="Readativity" />
              <div className="overlay">
                <h2>DBFZ Guide</h2>
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
      </div>
    </section>
    );
  }
}

export default Modal;
