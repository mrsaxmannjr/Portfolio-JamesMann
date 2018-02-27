import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";
import Video from "../Video";

const Main = () => (
  <div>
    <Video />
    <TheMain>
      <h1 id="intro">I am James Mann </h1>
      <p id="about">I&#39;m a full stack web developer, musician, martial artist and gamer.</p>
      <Overdrive id="img" duration="700" className="intro">
        <img src={logo} />
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

@-moz-keyframes fadein { /* Firefox */
  0% { opacity:0; }
  5% { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
  0% { opacity:0; }
  5% { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes fadein { /* Opera */
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
@-moz-keyframes fadein2 { /* Firefox */
  0% { opacity:0; }
30% { opacity:0; }
100% { opacity:1; }
}
@-webkit-keyframes fadein2 { /* Safari and Chrome */
  0% { opacity:0; }
30% { opacity:0; }
100% { opacity:1; }
}
@-o-keyframes fadein2 { /* Opera */
  0% { opacity:0; }
30% { opacity:0; }
100% { opacity:1; }
}
`;
