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
      <p>
      I am a Web Developer based in Denver, CO. My lifelong training in music gives me a unique, disciplined, creative, collaborative and focused approach to building full stack applications.
      </p>
      <p>I am currently enrolled in the Web Development Immersive program at Galvanize - Denver, Platte Campus.</p>
      <p>I have been playing music professionally for 15 years and for the last 11 years I have been traveling the world as a Music Director/Manager/Musician (Saxophones, Flute, Clarinet).</p>
      <p> Working on a cruise ships, I have worked and lived with people from up to 60 different countries, backgrounds and native languages. This can be very challenging in all aspects of daily life whether it be during work hours or during time off work. I believe the ability to communicate effectively and work together regardless of where a person is from and the language they speak is an invaluable skill that I have developed. This applies when working with customers and coworkers as well as in the creation of apps, websites etc. that appeal to a specific demographic or a larger worldview.</p>
      <p>I am a Colorado native and was raised in Fort Lupton, CO. From the day I got my first Nintendo Entertainment System, I have been enamored with video games and technology at large. This passion stayed with me as I discovered my next obsession in music. I followed the path music had laid out before me which literally led me around the globe and has now come full circle with me once again based in Colorado. Now, as the chapter of music has come to a close, I have fully immersed myself in first obsession.
      </p>
      <p>I studied at the University of Colorado, Boulder and received Bachelor's degrees in Music Performance (Saxophone, Jazz studies) and Music Education. I am a lifelong student of the martial arts and have studied Judo, Wrestling, Arnis/Eskrima, Shaolin Kung-Fu and most recently, Systema. I am a snowboarder, fitness enthusiast and gamer.</p>
      <AnimatedMap />
    </div>
  </TheAbout>
);

export default About;

const TheAbout = styled.div`
max-width: 960px;
margin: 45px auto;
min-height: 70vh;
padding: 80px 5% 0px;

img {
  height: 127px;
}

span {
  position: absolute;
  top: 0px;
  right: 442px;
}

h1 {
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
