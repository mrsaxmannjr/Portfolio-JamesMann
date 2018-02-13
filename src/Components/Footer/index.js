import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = props => (
  <FooterNav>
    <h3 id="find-me">Come at me</h3>
    <nav>
      <ul id="links">
        <li id="about">
          <Link to="/about">About</Link>
        </li>

        <li id="portfolio">
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li id="contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </FooterNav>
);

export default Footer;

const FooterNav = styled.footer`
grid-area: 3 / 1 / 4 / -1;
#find-me {
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 40px;
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
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
#about {
  padding: 5px 8px;
  border-radius: 3px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  color: #FFF;
  background-color: #00aced;
}
#portfolio {
  padding: 5px 8px;
border-radius: 3px;
-webkit-transition: all 0.3s ease;
transition: all 0.3s ease;
color: #FFF;
background-color: #4183c4;
    }
#contact {
  padding: 5px 8px;
border-radius: 3px;
-webkit-transition: all 0.3s ease;
transition: all 0.3s ease;
color: #FFF;
background-color: #3b5998;
    }
  a {
      text-decoration: none;
      color: inherit;
    }
`;
