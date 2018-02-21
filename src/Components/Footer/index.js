import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import github from "./github-sign.svg";
import linkedIn from "./linkedin.svg";
import talent from "./galvanize.png";

const Footer = () => (
  <FooterNav>
    <h3 id="find-me">FIND OUT MORE</h3>
    <nav>
      <ul id="links">
        <li >
          <Link to="https://github.com/mrsaxmannjr" target="_blank"><img src={github} /> </Link>
        </li>

        <li >
          <Link to="https://www.linkedin.com/in/mrsaxmannjr/" target="_blank"><img src={linkedIn} /></Link>
        </li>

        <li >
          <Link to="https://talent.galvanize.com/students/2067" target="_blank"><img src={talent} /></Link>
        </li>
      </ul>
    </nav>
  </FooterNav>
);

export default Footer;

const FooterNav = styled.footer`
padding-top: 40px;
padding-bottom: 25px;

img {
  height: 60px;

}

#find-me {
  text-transform: uppercase;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
  font-size: 1.17em;
}
text-align: center;

#links {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

li{
  padding: 0 20px 0 20px;
}
  a {
      text-decoration: none;
      color: inherit;
    }
`;
