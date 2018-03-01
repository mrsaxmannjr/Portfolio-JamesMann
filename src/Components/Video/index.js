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
