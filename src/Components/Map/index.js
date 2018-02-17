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

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
};

const cities = [
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
  { name: "Shanghai", coordinates: [121.4737, 31.2304] },
];

const popScale = scaleLinear()
  .domain([0, 100000000, 1400000000])
  .range(["#CFD8DC", "#607D8B", "#37474F"]);

class AnimatedMap extends Component {
  constructor() {
    super();
    this.state = {
      center: [0, 20],
      zoom: 1,
      cities: [
        { name: "Zurich", coordinates: [8.5417, 47.3769] },
        { name: "Singapore", coordinates: [103.8198, 1.3521] },
        { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
        { name: "Sydney", coordinates: [151.2093, -33.8688] },
        { name: "Lagos", coordinates: [3.3792, 6.5244] },
        { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
        { name: "Shanghai", coordinates: [121.4737, 31.2304] },
      ],
    };
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleCitySelection(evt) {
    const cityId = evt.target.getAttribute("data-city");
    const city = this.state.cities[cityId];
    this.setState({
      center: city.coordinates,
      zoom: 4,
    });
  }
  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1,
    });
  }
  render() {
    return (
      <div>
        <div style={wrapperStyles}>
          {
            this.state.cities.map((city, i) => (
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
            y: 20,
          }}
          style={{
            zoom: spring(this.state.zoom, { stiffness: 210, damping: 20 }),
            x: spring(this.state.center[0], { stiffness: 210, damping: 20 }),
            y: spring(this.state.center[1], { stiffness: 210, damping: 20 }),
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
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          hover: {
                            fill: "#F4DB5D",
                            stroke: "#b71c1c",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#b71c1c",
                            stroke: "#F4DB5D",
                            strokeWidth: 0.75,
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
                      onClick={this.handleCityClick}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#F4DB5D"
                        stroke="#b71c1c"
                      />
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
