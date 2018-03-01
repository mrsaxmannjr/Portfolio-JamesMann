import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FontIcon from "material-ui/FontIcon";
import logo from "./js.png";
import read from "./Assets/readimg.jpg";
import readBW from "./Assets/readimgBW.jpg";

const style = {
  margin: 12,
};

class Modal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [<FlatButton label="EXIT" primary={false} onClick={this.handleClose} />];

    return (
          <div onClick={this.handleOpen}>
            <div className="project-icon">
              <img className="project-img" src={readBW} alt="Readativity" />
              <div className="overlay">
                <h2>Readativity</h2>
              </div>
            </div>
            <Dialog id="dialog" actions={actions} modal={true} open={this.state.open}>
              <ModalStyle className="project-icon">
                <div className="overlay">
                  <h2 id="modal-title">Readativity</h2>
                  <p id="project-intro">Readativity is where reading meets productivity!</p>
                  <p id="project-description">
                    This app encourages you to read more while making the most of your time. You can
                    keep track of how long you read everyday and check how much you read over the
                    week.
                  </p>
                  <div id="project-links">
                    <Link to="">
                      <RaisedButton label="LIVE SITE" style={style} backgroundColor="#F4DB5D" />
                    </Link>
                    <Link to="">
                      <RaisedButton label="GITHUB REPO" style={style} backgroundColor="#F4DB5D" />
                    </Link>
                  </div>
                  <div id="modal-img">
                    <img className="project-img" src={read} alt="Readativity" />
                  </div>
                  <div className="tech">
                    <h3>Technologies &amp; TECHNIQUES</h3>
                    <p>
                      React.js, Chart.js, HTML5, CSS3, JavaScript(ES6), Node.js, PostgreSQL,
                      Knex.js, Express.js, Heroku, Cypress, Google News API, Git/Github, Agile
                      Workflow, Pair Programming
                    </p>
                  </div>
                </div>
              </ModalStyle>
            </Dialog>
          </div>
    );
  }
}

export default Modal;

const ModalStyle = styled.div`
  color: var(--black);

  img {
    height: 127px;
  }

  #modal-title {
    font-size: 1.7em;
    text-decoration: underline;
    font-weight: 900;
    padding: 0;
    padding-bottom: 0;
    text-transform: uppercase;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: left;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    text-align: left;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 900;
    padding: 0.5rem;
    padding-left: 0;
    padding-top: 0.25rem;
    padding-bottom: 0px;
    margin-bottom: -5px;
  }

  #modal-img {
    display: flex;
    justify-content: center;
  }

  #project-links {
    display: flex;
    justify-content: center;
    color: black;
    text-decoration: none;
  }

  .project-img {
    height: 345px;
    width: 345px;
    border: solid var(--JS-yellow);
  }

  p {
    font-size: 17px;
    line-height: 1.2em;
    padding: 0 0.35rem;
    margin-bottom: 0.55rem;
    text-align: center;
    padding-left: 0;
    font-size: 17px;
    text-align: left;
  }

  #project-description {
    margin-bottom: 0;
  }
`;
