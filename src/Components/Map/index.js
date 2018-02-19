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
import map from "./world-110m.json";
import cities from "./cities-visited.json";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
};

const popScale = scaleLinear()
  .domain([0, 100000000, 1400000000])
  .range(["#CFD8DC", "#607D8B", "#37474F"]);

class AnimatedMap extends Component {
  constructor() {
    super();
    this.state = {
      center: [0, 20],
      zoom: 1,
      textVisibility: "hidden",
      markerVisibility: "visible",
    };
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(item) {
    this.setState({
      textVisibility: "visible",
    });
  }
  handleCitySelection(evt) {
    const cityId = evt.target.getAttribute("data-city");
    const city = cities[cityId];
    const cityName = document.getElementById(`${evt.target.textContent}`);
    console.log(cityName);
    this.toggleHidden(cityName);
    this.setState({
      center: city.coordinates,
      zoom: 15,
      // markerVisibility: "hidden",
    });
  }

  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1,
      textVisibility: "hidden",
      markerVisibility: "visible",
    });
  }

  render() {
    return (
      <div>
        <div style={wrapperStyles}>
          {
            cities.map((city, i) => (
              <button
                key={i}
                className="btn px1"
                data-city={i}
                onClick={this.handleCitySelection}
              >
                { city.name }
              </button>
            ))
          }
          <button onClick={this.handleReset}>
            { "Reset" }
          </button>
        </div>
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
                        visibility={this.state.textVisibility}
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
                      <g transform="translate(-12, -24)" visibility={this.state.markerVisibility} >
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
      </div>
    );
  }
}

export default AnimatedMap;
