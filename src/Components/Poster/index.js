import React from "react";
import styled from "styled-components";
import poster from "./portfolio-background-mobile.jpg";


const Video = () => (
  <ThePoster>
    <img src={poster} alt="video poster" />
  </ThePoster>
);

export default Video;

const ThePoster = styled.div`
  img {
    opacity: 0.3;
    position: fixed;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: 100vh;
    z-index: -100;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    display: inline-block;
  }
`;
