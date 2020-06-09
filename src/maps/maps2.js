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

class Map1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pathCoordinates = [
      { lat: 25.27807, lng: 83.00185 },
      { lat: 25.27774, lng: 83.00283 },
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
      <div style={{width: '100vm', height: '85vh'}}>
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

export default Map1;

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