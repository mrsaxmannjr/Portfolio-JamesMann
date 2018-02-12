import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import logo from "./logo.png";

const Header = props => (
  <TheHeader>
    <Link to="/">
      <div >JM</div>
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
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  li {
      display: inline-block;
      padding-left: 15px;
    }
`;
