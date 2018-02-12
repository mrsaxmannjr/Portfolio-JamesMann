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
grid-area: 1 / 1 / -1 / -1;
//  z-index: -1;
opacity: 0.2;
height: 100%;
width: 100%;
object-fit: cover;
`;
