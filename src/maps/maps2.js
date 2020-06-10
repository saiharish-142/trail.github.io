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
    // const pathCoordinates = [
    //   {lat: 25.2705133, lng: 83.0254583},
    //   {lat: 25.27051 , lng: 83.02547},{ lat: 25.27102 , lng: 83.02549},{ lat: 25.27108 , lng: 83.02527},{ lat: 25.27121 , lng: 83.02516},{ lat: 25.27166 , lng: 83.02447},{ lat: 25.27203 , lng: 83.02392},{ lat: 25.27207 , lng: 83.02382},{ lat: 25.27214 , lng: 83.02357},{ lat: 25.27217 , lng: 83.02325},{ lat: 25.27213 , lng: 83.02296},{ lat: 25.272 , lng: 83.02237},{ lat: 25.27128 , lng: 83.01953},{ lat: 25.27075 , lng: 83.01742},{ lat: 25.27035 , lng: 83.01581},{ lat: 25.27033 , lng: 83.01556},{ lat: 25.2704 , lng: 83.0151},{ lat: 25.27048 , lng: 83.01495},{ lat: 25.27085 , lng: 83.01456},{ lat: 25.27148 , lng: 83.01406},{ lat: 25.27169 , lng: 83.01395},{ lat: 25.27193 , lng: 83.01391},{ lat: 25.27199 , lng: 83.01388},{ lat: 25.27201 , lng: 83.01384},{ lat: 25.2721 , lng: 83.01388},{ lat: 25.27223 , lng: 83.01391},{ lat: 25.2724 , lng: 83.01367},{ lat: 25.27269 , lng: 83.01332},{ lat: 25.27311 , lng: 83},
    //   { lat: 25.276434, lng: 82.99964310000001}
    // ];
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