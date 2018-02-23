import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./js.png";
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
              <img className="project-img" src={whear} alt="Readativity" />
              <div className="overlay">
                <h2>Whear.com</h2>
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
