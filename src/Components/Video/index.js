import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import video from "./hd0933.mov";

const Video = props => (
  <TheVideo
    autoPlay
    loop
    muted
    src={video}
  />
  // <TheVideo src="https://www.youtube.com/embed/nolAEkIuj9Q?autoplay=1&controls=0&showinfo=0&autohide=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/nolAEkIuj9Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
);

export default Video;

const TheVideo = styled.video`
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
`;
