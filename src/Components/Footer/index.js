import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = props => (
  <FooterNav id="footer">
    <h3>Social Nav</h3>
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
  </FooterNav>
);

export default Footer;

const FooterNav = styled.footer`
grid-area: 3 / 1 / 4 / -1;
text-align: center;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  li {
      display: inline-block;
      padding-left: 15px;
    }
  a {
      text-decoration: none;
      color: inherit;
    }
`;
