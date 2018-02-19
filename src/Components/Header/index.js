import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";
import logo from "./js.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      background: "rgba(17, 17, 17,0)",
    };
    this.addColor = this.addColor.bind(this);
  }


  addColor() {
    this.setState({
      background: "rgba(17, 17, 17,0)",
    });
  }

  removeColor() {
    this.setState({
      background: "rgba(17, 17, 17,0)",
    });
  }
  render() {
    return (
      <TheHeader style={{ background: (this.state.background) }}>
        <Link id="logo" to="/">
          <img src={logo} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about" onClick={this.addColor} >ABOUT</Link>
            </li>

            <li>
              <Link to="/resume" onClick={this.addColor}>RESUME</Link>
            </li>

            <li>
              <Link to="/projects" onClick={this.addColor}>PROJECTS</Link>
            </li>

            <li>
              <Link to="/contact" onClick={this.addColor}>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </TheHeader>
    );
  }
}

export default Header;

const TheHeader = styled.header`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: space-between;
-webkit-justify-content: space-between;
-ms-flex-pack: space-between;
justify-content: space-between;
position: fixed;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
top: 0;
width: 100%;
position: fixed;

#logo {
  text-decoration: none;
  padding-left: 0;
  padding-top: 0;
  img {
    height: 45px;
  }
}

nav {
    margin-right: 20px;
  }

a {
  text-decoration: none;
  color: #fff;
  padding: 15px 10px 18px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  display: block;
  font-size: 16px;
  padding: 15px 0px 18px 40px;
  }

ul {
  margin-left: 1.45rem;
  margin-bottom: 1.45rem;

li {
  display: inline-block;
  margin-bottom: calc(1.45rem / 2);
  margin: 0;
  img {
    height: 100px;
  }
    }
`;
