import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";
import shfc from "./Assets/shfc.jpg";
import shfcBW from "./Assets/shfcBW.jpg";

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
              <img className="project-img" src={shfcBW} alt="SHF" />
              <div className="overlay">
                <h2>SHF Collectors</h2>
              </div>
            </div>
            <Dialog id="dialog" actions={actions} modal={true} open={this.state.open} autoScrollBodyContent={true}>
              <ModalStyle className="project-icon">
                <div className="overlay">
                  <h2 id="modal-title">SHF Collectors</h2>
                  <p id="project-intro">Dedicated to S.H.Figuarts Collectors!</p>
                  <p id="project-description">
                    The only place to go when you want to browse the catalog of action figures from S.H.Figuarts!
                   Find the cheapest prices, see all the features for each figure, populate your virtual collection and unlock collector achievements!
                  </p>
                  <div id="project-links">
                    <a href="https://shfcollectors.com/" target="_blank">
                      <RaisedButton label="LIVE SITE" style={style} backgroundColor="#F4DB5D" />
                    </a>
                    <a href="https://github.com/mrsaxmannjr/SHFCollectors-FE" target="_blank">
                      <RaisedButton label="GITHUB REPO" style={style} backgroundColor="#F4DB5D" />
                    </a>
                  </div>
                  <div id="modal-img">
                    <img className="project-img" src={shfc} alt="Readativity" />
                  </div>
                  <div className="tech">
                    <h3>TECH &amp; TOOLS</h3>
                    <p>
                    React.js, Amazon Product Advertising API, HTML5, CSS3, JavaScript(ES6), Node.js, PostgreSQL, Knex.js, Express.js, Heroku, Firebase, Git/Github, Agile Workflow
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

#project-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
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

@media (max-width: 465px) {
  #modal-title {
    font-size: 25px;
    // text-decoration: underline;
    font-weight: 900;
    padding: 0;
    padding-bottom: 0;
    text-transform: uppercase;
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
    padding: 0.5rem;
    padding-left: 0;
    padding-top: 0.25rem;
    padding-bottom: 0px;
    margin-bottom: -5px;
  }

  p {
    line-height: 1.2em;
    padding: 0 0.35rem;
    margin-bottom: 0.55rem;
    padding-left: 0;
    font-size: 17px;
    text-align: left;
  }

  .project-img {
    height: 100%;
    width: 100%;
    border: solid var(--JS-yellow);
  }

  #project-links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    color: black;
    text-decoration: none;
  }
}
`;
