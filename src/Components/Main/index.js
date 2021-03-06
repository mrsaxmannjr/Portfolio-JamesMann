import React from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import MediaQuery from 'react-responsive';
import logo from './js.png';
import Video from '../Video';
import Poster from '../Poster';

const Main = () => (
  <div>
    <MediaQuery query="(min-width: 813px)">
      <Video />
    </MediaQuery>
    <MediaQuery query="(max-width: 812px)">
      <Poster />
    </MediaQuery>
    <TheMain>
      <div id="header-background">
        <p id="placeholder">placeholder</p>
      </div>
      <h1 id="intro">I am James Mann </h1>
      <p id="about">I&#39;m a full stack web developer, musician, educator, martial artist and gamer.</p>
      <Overdrive id="img" duration="700" className="intro">
        <img src={logo} alt="JM logo" />
      </Overdrive>
    </TheMain>
  </div>
);

export default Main;

const TheMain = styled.div`
max-width: 960px;
margin: 45px auto;
margin-top: 0px;
min-height: 70vh;
padding: 80px 5% 0px;
padding-top: 130px;
padding-bottom: 50px;

#header-background, #placeholder {
  display: none;
}

img {
  height: 250px;
}

#intro {
  margin-left: -4.5px;
  margin-bottom: 10px;
  margin-top: 30px;
  font-size: 64px;
  font-weight: 300;
  line-height: 1.2;
  animation: fadein 6s;
  -moz-animation: fadein 6s; /* Firefox */
  -webkit-animation: fadein 6s; /* Safari and Chrome */
  -o-animation: fadein 6s; /* Opera */
 }

@keyframes fadein {
  0% { opacity:0; }
  5% { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
  0% { opacity:0; }
  5% { opacity:0; }
  100% { opacity:1; }
}

#about {
  animation: fadein2 6s;
  -moz-animation: fadein2 6s; /* Firefox */
  -webkit-animation: fadein2 6s; /* Safari and Chrome */
  -o-animation: fadein2 6s; /* Opera */
}

@keyframes fadein2 {
0% { opacity:0; }
30% { opacity:0; }
100% { opacity:1; }
}
@-webkit-keyframes fadein2 { /* Safari and Chrome */
  0% { opacity:0; }
30% { opacity:0; }
100% { opacity:1; }
}

@media (max-width: 812px) {
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

@media (max-width: 666px) {
  padding-top: 70px;
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
  padding-top: 30px;
  padding-bottom: 50px;
  min-height: 60vh;
  img {
    height: 150px;
  }
  #intro {
  font-size: 40px;
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
    height: 30px;
    position: fixed;
    background: #111;
  }

  #placeholder {
    visibility: hidden;
  }
}

@media (max-width: 400px) {
  padding-bottom: 0px;
}
`;
