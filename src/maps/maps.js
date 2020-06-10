import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  Marker,
} from "react-google-maps";
import Light from "./trafficlight/light";
// import vector from "./Trafficlogo.svg";
// import light from "./redlight.png";
import Redlight from "./Redlight.svg";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pathCoordinates = [
      { lat: 25.29932, lng: 83.00466 },
      { lat: 25.29864, lng: 83.00449 },
      { lat: 25.298, lng: 83.00425 },
      { lat: 25.29767, lng: 83.00421 },
      { lat: 25.29681, lng: 83.00441 },
      { lat: 25.29608, lng: 83.00444 },
      { lat: 25.29478, lng: 83.00467 },
      { lat: 25.29292, lng: 83.00493 },
      { lat: 25.29237, lng: 83.00497 },
      { lat: 25.29161, lng: 83.00477 },
      { lat: 25.28989, lng: 83.00452 },
      { lat: 25.28952, lng: 83.00437 },
      { lat: 25.28911, lng: 83.00403 },
      { lat: 25.28809, lng: 83.00379 },
      { lat: 25.28697, lng: 83.00365 },
      { lat: 25.28603, lng: 83.00334 },
      { lat: 25.28443, lng: 83.00352 },
      { lat: 25.28311, lng: 83.0033 },
      { lat: 25.28203, lng: 83.00309 },
      { lat: 25.27798, lng: 83.00241 },
      { lat: 25.27782, lng: 83.00242 },

      { lat: 25.27714, lng: 83.00564 },
      { lat: 25.27648, lng: 83.00648 },
    ];

    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={18}
          defaultCenter={{ lat: 25.27794, lng: 83.00244 }}
        >
          <Marker
            icon={Redlight}
            position={{ lat: 25.27794, lng: 83.00244 }}
            id="n"
          />
          <Marker
            icon={Redlight}
            position={{ lat: 25.27773, lng: 83.00241 }}
            id="n"
          />
          <Marker
            icon={Redlight}
            position={{ lat: 25.27776, lng: 83.00217 }}
            id="n"
          />
          <Marker
            icon={Redlight}
            position={{ lat: 25.27796, lng: 83.00218 }}
            id="n"
          />
          <Polyline
            path={pathCoordinates}
            options={{
              strokeColor: "#ff2527",
              strokeOpacity: 0.75,
              strokeWeight: 2,
              icons: [
                {
                  icon: "lineSymbol",
                  offset: "0",
                  repeat: "20px",
                },
              ],
            }}
          />
          >
        </GoogleMap>
      ))
    );

    return (
      <div style={{width: '100vm', height: '60vh'}}>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdNYLs-vqWXBDAjxXvbKe6igT9v7pqrps&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

      </div>
    );
  }
}

export default Map;

/*
          <Marker position={{ lat: 25.27794, lng: 83.00244 }} />
          <Marker position={{ lat: 25.27773, lng: 83.00241 }} />
          <Marker position={{ lat: 25.27776, lng: 83.00217 }} />
          <Marker position={{ lat: 25.27796, lng: 83.00218 }} />
         
           { lat: 25.27807, lng: 83.00185 },
      { lat: 25.27774, lng: 83.00283 },
 <img src={vector} height="50" alt="Trafficlogo" />
 <img src={light} height="50" alt="light" />

          */