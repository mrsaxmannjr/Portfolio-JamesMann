import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";
import AnimatedMap from "../Map";
import cu from "./cu.png";
import fullstack from "./fullstack.png";
import gGrad from "./gGrad.png";
import mmgr from "./mmgr.png";
import nerd from "./nerd.png";
import skills from "./skills.png";

const About = () => (
  <TheAbout>
    <div id="header-background">
      <p id="placeholder">placeholder</p>
    </div>
    <span>
      {/* Logo animation */}
      <Overdrive id="img" duration="700">
        <img id="logo" src={logo} alt="JM Logo" />
      </Overdrive>
    </span>
    <div>
      <h1>ABOUT</h1>
      <p>
        Hi, I&#39;m James Mann, a Web Developer based in Denver, CO. My lifelong training in music gives me a unique, creative, collaborative and focused approach to building web apps.  I am currently working as Front End Developer - UI Engineer for OppenheimerFunds.
      </p>

      <h2>WHERE IN THE WORLD</h2>
      <p id="places-visited">Here you can browse all the places I visited during my 11 years of travel on cruise ships!</p>

      <AnimatedMap />
      <h2>JAMES'S ACHIEVEMENTS AT A GLANCE</h2>
      <div id="achievements">
        <img id="top-achievement" src={fullstack} alt="fullstack" />
        <img src={skills} alt="skills" />
        <img src={mmgr} alt="mmgr" />
        <img src={gGrad} alt="gGrad" />
        <img src={cu} alt="cu" />
        <img src={nerd} alt="nerd" />
      </div>

      <p>Before accepting a position with Oppenheimer, I taught 100+ aspiring web developers as a Resident Instructor for the Web Development program at Galvanize, Denver-Platte campus.</p>

      <p>Prior to my transition into the developer world, I had been playing and teaching music professionally for 15 years and for the last 11 years I was traveling the world as a Music Director/Manager/Musician (Saxophones, Flute, Clarinet).</p>
      <p> Working on cruise ships, I have lived and worked with people from up to 60 different countries, backgrounds and native languages.  I believe the ability to communicate effectively and work together regardless of where a person is from and the language they speak is an invaluable skill that I have developed. This applies when working with customers and co-workers as well as in the creation of web applications that appeal to a specific demographic or a larger worldview.</p>
      <p>In addition to performing, I have also supported the Colorado music scene through education.  I ran a private lesson studio with 22 students, I have been a guest instructor for middle and high schools as well as a guest clinician.  My passion for teaching has extended into the developer community as well.  I was a co-organizer of Learn to Code at Galvanize, a weekly 2 hour class where I taught basic HTML, CSS and JavaScript.  I was a Teaching Assistant for the JavaScript Accelerated course at Galvanize as well.  A classmate and I developed a weekly JavaScript whiteboard practice session to help with interview preparation we call Beer Boarding.  Lastly, I co-developed and taught a 3 hour course on HTML, CSS and Materialize for Brunch and Learn as well as a 3 part JavaScript for Beginners course that runs for 3 hours on Saturdays.</p>
      <p>I completed the 6 month Web Development Immersive program at Galvanize in April 2018.  I received Bachelor's degrees in Music Performance (Saxophone, Jazz studies) and Music Education from the University of Colorado, Boulder. I'm a lifelong student of the martial arts and have studied Judo, Wrestling, Arnis/Eskrima, Shaolin Kung-Fu and most recently, Systema.  In my free time I am a snowboarder, fitness enthusiast, comedy connoisseur and gamer(video & board).  I'm a Colorado native but I've never climbed any Fourteeners as far as I know.</p>
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

span {
  position: fixed;
  top: 0px;
  right: 442px;
    img {
      height: 127px;
    }
}

h1 {
  font-size: 38px;
  margin-bottom: 20px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
  }

h2 {
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
}

#places-visited {
  margin-bottom: -3px;
  text-align: center;
}

#achievements {
  display: flex;
  flex-direction: column;
  #top-achievement {
    margin-top: 1.5rem;
  }
  img {
    margin-bottom: 1.5rem;
    width: 100%;
  }
}

p {
  font-size: 20px;
}

#header-background {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  height: 127px;
  position: fixed;
  background: #111;
}

#placeholder {
  visibility: hidden;
}

@media (max-width: 666px) {
  padding-top: 70px;
    #logo {
      display: none;
    }

    #header-background {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: space-between;
      -ms-flex-pack: space-between;
      justify-content: space-between;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      top: 0;
      width: 100%;
      height: 40px;
      position: fixed;
      background: #111;
    }

    #placeholder {
      visibility: hidden;
    }
}

@media (max-width: 543px) {
  padding-top: 40px;
  padding-bottom: 0px;
  min-height: 60vh;

  #header-background {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-between;
    -ms-flex-pack: space-between;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    top: 0;
    width: 100%;
    height: 30px;
    position: fixed;
    background: #111;
  }

  #placeholder {
    visibility: hidden;
  }
}
`;
