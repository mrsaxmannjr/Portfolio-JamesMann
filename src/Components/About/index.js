import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";

import AnimatedMap from "../Map";

const About = () => (
  <TheAbout>
    <span>
      <Overdrive id="img" duration="700">
        <img src={logo} />
      </Overdrive>
    </span>
    <div>
      <h1>ABOUT</h1>
      <p>Hi there, I'm James Mann</p>
      <p>
      I am a Full Stack Web Developer based in Denver, CO. My lifelong training in music gives me a unique, disciplined, creative, collaborative and focused approach to building full stack applications.
      </p>
      <p>I am currently enrolled in the Web Development Immersive program at Galvanize - Denver, Platte Campus.</p>
      <p>I have been playing music professionally for 15 years and for the last 11 years I have been traveling the world as a Music Director/Manager/Musician (Saxophones, Flute, Clarinet).</p>
      <p> Working on a cruise ships, I have worked and lived with people from up to 60 different countries, backgrounds and native languages. This can be very challenging in all aspects of daily life whether it be during work hours or during time off work. I believe the ability to communicate effectively and work together regardless of where a person is from and the language they speak is an invaluable skill that I have developed. This applies when working with customers and coworkers as well as in the creation of apps, websites etc. that appeal to a specific demographic or a larger worldview.</p>
      <p>I studied at the University of Colorado, Boulder and received Bachelor's degrees in Music Performance (Saxophone, Jazz studies) and Music Education. I am a lifelong student of the martial arts and have studied Judo, Wrestling, Arnis/Eskrima, Shaolin Kung-Fu and most recently, Systema. I am a snowboarder, fitness enthusiast and gamer.</p>
      <h2>WHERE IN THE WORLD</h2>
      <p>Here you can browse all the places I visited during my 11 years of travel!</p>
      <AnimatedMap />
    </div>
  </TheAbout>
);

export default About;

const TheAbout = styled.div`
max-width: 960px;
margin: 45px auto;
margin-top: 0px;
min-height: 70vh;
padding: 80px 5% 0px;
padding-top: 130px;

img {
  height: 127px;
}

span {
  position: fixed;
  top: 0px;
  right: 442px;
}

h1, h2 {
  font-size: 38px;
  margin-bottom: 30px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
  }
`;
