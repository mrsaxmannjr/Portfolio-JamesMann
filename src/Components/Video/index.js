import React from "react";
import styled from "styled-components";

import video from "./portfolio-background.mp4";


const Video = () => (
  <TheVideo
    autoPlay
    loop
    muted
    src={video}
  />
  // <TheVideo src="https://www.youtube.com/embed/nolAEkIuj9Q?rel=0&autoplay=1&showinfo=0&modestbranding=0&controls=0&loop=1&enablejsapi=1" frameBorder="0" />

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
