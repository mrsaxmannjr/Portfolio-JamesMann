import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import logo from "./logo.png";

const Header = props => (
  <TheHeader>
    <Link id="logo" to="/">
      <span>JM</span>
      <h1 id="full-name">James Mann</h1>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </TheHeader>
);

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

#logo {
  color: #f1c40f;
  text-decoration: none;
}

span {
  text-transform: uppercase;
  font-weight: 900;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
  background: #f1c40f;
  color: #111;
  padding: 10px;
  position: relative;
  z-index: 10;
  overflow: hidden;
  font-size: 26px;
  height: 52px;
  width: 52px;
  display: block;
}

#full-name {
  margin: 0;
  top: 0;
  position: absolute;
  display: none;
  z-index: 5;
  -webkit-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  text-transform: uppercase;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  font-size: 24px;
  text-decoration: none;
  font-weight: 900;
  line-height: 52px;
  color: #FFF;
  -webkit-transition: 0.3s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition: 0.3s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

nav {
    margin-right: 20px;
  }

a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 15px 10px 18px;
  font-weight: 900;
  text-transform: uppercase;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  display: block;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-size: 16px;
  padding: 15px 20px 18px;
  }

ul {
  margin-left: 1.45rem;
  margin-bottom: 1.45rem;

li {
  display: inline-block;
  padding: 15px 10px 18px;
  padding-left: 0;
  margin-bottom: calc(1.45rem / 2);
  margin: 0;
    }
`;
