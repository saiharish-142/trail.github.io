import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 15.8780927 , lng: 78.582774 }} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
    return <div style={{width: '100vm', height: '60vh'}}>
        <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyBbXUIQo_Z8QiPFsY7cvBKWLgqsX14T9Vk&callback=initMap'}  
            loadingElement={<div style={{height: "100%"}} />}
            containerElement={<div style={{height: "100%"}} />}
            mapElement={<div style={{height: "100%"}} />}
        />
    </div>;
}
