import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import { scaleLinear } from "d3-scale";
import styled from "styled-components";
import map from "./world-110m.json";
import cities from "./cities-visited.json";

const popScale = scaleLinear()
  .domain([0, 100000000, 1400000000])
  .range(["#CFD8DC", "#607D8B", "#37474F"]);

class AnimatedMap extends Component {
  constructor() {
    super();
    this.state = {
      center: [0, 20],
      zoom: 1,
      visibility: "visible",
    };
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleCitySelection(evt) {
    const location = JSON.parse(evt.target.options[evt.target.selectedIndex].value);

    this.setState({
      center: location,
      zoom: 10,
      visibility: "hidden",
    });
  }

  handleMarkerVisibility(evt) {
    // const location = JSON.parse(evt.target.options[evt.target.selectedIndex].value);

    this.setState({
      visibility: "visible",
    });
  }

  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1,
      visibility: "visible",
    });
  }

  render() {
    return (
      <MapDiv>
        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 15,
          }}
          style={{
            zoom: spring(this.state.zoom, { stiffness: 410, damping: 100 }),
            x: spring(this.state.center[0], { stiffness: 410, damping: 100 }),
            y: spring(this.state.center[1], { stiffness: 410, damping: 100 }),
          }}
        >
          {({ zoom, x, y }) => (
            <ComposableMap
              projectionConfig={{ scale: 205 }}
              width={980}
              height={551}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <ZoomableGroup center={[x, y]} zoom={zoom} >
                <Geographies geography={map} >
                  {(geographies, projection) =>
                    geographies.map((geography, i) => geography.id !== "010" && (
                      <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: popScale(geography.properties.pop_est),
                            stroke: "#b71c1c",
                            strokeWidth: 0.25,
                            outline: "none",
                          },
                          hover: {
                            fill: "#F4DB5D",
                            stroke: "#b71c1c",
                            strokeWidth: 0.25,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#b71c1c",
                            stroke: "#F4DB5D",
                            strokeWidth: 0.25,
                            outline: "none",
                          },
                        }}
                      />
                    ))}
                </Geographies>
                <Markers>
                  {cities.map((city, i) => (
                    <Marker
                      key={i}
                      marker={city}
                      style={{
                        default: { stroke: "#b71c1c" },
                        hover: { stroke: "#FF5722" },
                        pressed: { stroke: "#FF5722" },
                      }}
                    >
                      <text
                        id={city.name}
                        visibility={city.coordinates.toString() === this.state.center.toString() ? "visible" : "hidden"}
                        textAnchor="middle"
                        y="-35"
                        style={{
                          fill: "#fff",
                          stroke: "#fff",
                          fontSize: "35px",
                        }}
                      >
                        {city.name}
                      </text>
                      <g
                        transform="translate(-12, -24)"
                        visibility={city.coordinates.toString() === this.state.center.toString() ? "#b71c1c" : this.state.visibility}
                      >
                        <path
                          fill="#F4DB5D"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeLinejoin="miter"
                          d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                        />
                        <circle
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeLinejoin="miter"
                          cx="12"
                          cy="9"
                          r="3"
                        />
                      </g>
                    </Marker>
                  ))}
                </Markers>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
        <div id="map-controls" >
          <select id="select" onChange={this.handleCitySelection} >
            {
              cities.map((city, i) => (
                <option
                  key={i}
                  className="btn px1"
                  data-city={i}
                  value={JSON.stringify(city.coordinates)}
                >
                  { city.name }
                </option>
              ))
            }
          </select>
          <button id="reset-button" onClick={this.handleReset}>
            { "Reset Map" }
          </button>
        </div>
      </MapDiv>
    );
  }
}

export default AnimatedMap;

const MapDiv = styled.div`
#map-controls {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 5px;
}

#select {
  width: 100%;
  border: solid var(--JS-yellow);
  height: 30px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 20px;
}

#reset-button {
  width: 160px;
  border: solid var(--JS-yellow);
  margin-left: 5px;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 20px;
  background: var(--JS-yellow);
}
`;
