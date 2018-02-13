import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Video = props => (
  <TheVideo
    autoPlay
    loop
    muted
    src="http://scotttolinski.com//static/showcase2.63abd12f.mp4"
  />
);

export default Video;

const TheVideo = styled.video`
opacity: 0.2;
position: fixed;
bottom: 0;
min-width: 100%;
min-height: 100%;
width: auto;
height: auto;
z-index: -100;
left: 50%;
-webkit-transform: translateX(-50%);
-ms-transform: translateX(-50%);
transform: translateX(-50%);
display: inline-block;
`;
